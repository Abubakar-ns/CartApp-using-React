import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import firebase from 'firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: [],
        loading: true
    }
    this.db = firebase.firestore();
  }
  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('Products')
    //   .get()
    //   .then((snapshot)=>{
    //     //console.log(snapshot);

    //     //snapshot.docs.map((doc)=>{
    //     //  console.log(doc.data())
    //     //});

    //     const products = snapshot.docs.map((doc)=>{
    //       const data = doc.data();
    //       data['id']=doc.id
    //       return data;
    //     });
    //     this.setState({
    //       //products array wala products hai 
    //       //right wala product upar snapshot.doc.map se aaya
    //       products: products,
    //       loading: false
    //     })
    //   })
    this.db
      .collection('Products')
      .where('price','>=',99999 )
      .where('title','==','Laptop')
      .orderBy('price','desc')
      .onSnapshot((snapshot)=>{
        //console.log(snapshot);

        //snapshot.docs.map((doc)=>{
        //  console.log(doc.data())
        //});

        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();
          data['id']=doc.id
          return data;
        });
        this.setState({
          //products array wala products hai 
          //right wala product upar snapshot.doc.map se aaya
          products: products,
          loading: false
        })
      })
  }
  handleIncreaseQuantity = (product)=>{
      //console.log('Hey Please inc the qty of',product);
      const {products} = this.state;
      const index = products.indexOf(product);
      const docRef = this.db.collection('Products').doc(products[index].id);
      docRef
        .update({
          qty: products[index].qty+1 ,
        })
        .then(()=>{
            console.log('Update Succesfully');
        })
        .catch((error)=>{
          console.log('Error: ',error);
        })
      // products[index].qty+=1;
      // this.setState({
      //     //products:products
      //     products
      // })

  }
  handleDecreaseQuantity = (product)=>{
      //console.log('Hey Please inc the qty of',product);
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty===0){
          return;
      }
      else{
        const docRef = this.db.collection('Products').doc(products[index].id);
        docRef
          .update({
            qty: products[index].qty-1 ,
          })
          .then(()=>{
              console.log('Update Succesfully');
          })
          .catch((error)=>{
            console.log('Error: ',error);
          })
      }


  }
  handleDeleteProduct = (id)=>{
      const docRef = this.db.collection('Products').doc(id);
        docRef
          .delete()
          .then(()=>{
              console.log('Deleted Succesfully');
          })
          .catch((error)=>{
            console.log('Error: ',error);
          })
  }
  getCartCount=()=>{
    const {products} = this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }
  getTotalPrice=()=>{
    const {products} = this.state;
    let count=0;
    products.forEach((product)=>{
      count+=(product.qty*product.price);
    })
    return count;
  }
  addProduct=()=>{
    this.db
        .collection('Products')
        .add({
          img: 'https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg',
          price: 45999,
          qty: 3,
          title: 'DSLR'
        })
        .then((docRef)=>{
            console.log('Product has been added',docRef);

        })
        .catch((error)=> {
              console.log('Error',error);
        })
  }
  render(){
    const {products,loading} = this.state;
    return (
      <div className="App">
          {!loading && <Navbar count={
            this.getCartCount()
            }
            />
            }
            <button onClick={this.addProduct} style={styles.addpro} >Add a Product</button>
          <Cart
            products = {products}
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity} 
            onDeleteProduct = {this.handleDeleteProduct}
          />
          {(loading)&& <h1 style={styles.load}>Loading Products...</h1>}
          <div style={styles.totalblock}>{!loading && <span style={styles.total}>Total: {this.getTotalPrice()}</span>} </div>
          
      </div>
    );
  }
}
const styles={
  totalblock:{
    marginTop: '2%',
    marginLeft: '30%',
    marginBottom: '2%',
    backgroundColor: 'black',
    height: 'inherit',
    width: '10%',
    display: 'flex',
    alighnItems: 'center',
  },
  total:{

    color: 'white',
    padding: '4px 8px',
    textAlign: 'center',
    
    
  },
  load:{
    marginTop: '15%',
    marginLeft: '35%',

  },
  addpro:{
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    
  }
}
export default App;
