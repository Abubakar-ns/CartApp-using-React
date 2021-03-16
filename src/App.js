import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import firebase from 'firebase';
class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: []
    }
  }
  componentDidMount(){
    firebase
      .firestore()
      .collection('Products')
      .get()
      .then((snapshot)=>{
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
          products: products
        })
      })
  }
  handleIncreaseQuantity = (product)=>{
      //console.log('Hey Please inc the qty of',product);
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty+=1;
      this.setState({
          //products:products
          products
      })

  }
  handleDecreaseQuantity = (product)=>{
      //console.log('Hey Please inc the qty of',product);
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty===0){
          return;
      }
      else{
          products[index].qty-=1;
          this.setState({
              //products:products
              products
          })
      }


  }
  handleDeleteProduct = (id)=>{
      const {products} = this.state;
      const items = products.filter((item)=>item.id!==id);
      this.setState({
          //products:products
          products:items
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
  render(){
    const {products} = this.state;
    return (
      <div className="App">
          <Navbar count={
            this.getCartCount()
            }
            />
          <Cart
            products = {products}
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity} 
            onDeleteProduct = {this.handleDeleteProduct}
          />
          <div style={styles.totalblock}>
            <span style={styles.total}>Total: {this.getTotalPrice()}</span>
          </div>
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
    
  }
}
export default App;
