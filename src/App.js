import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img:'https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX466_.jpg',
                id: 1
            },
            {
                price:999,
                title:'Shirt',
                qty:1,
                img:'https://cdn.shopify.com/s/files/1/0456/2740/8593/products/Men_sVintageFloralEthnicTShirtsSummerBeachDashikiFloralCasualTopsTee-01_7fcdb8b7-c2d4-4121-bd62-ef07ed45363d_254x@2x.png?v=1613123112',
                id: 2
            },
            {
                price: 9999,
                title: 'Phone',
                qty: 1,
                img:'https://images-na.ssl-images-amazon.com/images/I/71w3oJ7aWyL._SL1500_.jpg',
                id: 3
            },
            {
                price: 99999,
                title: 'Laptop',
                qty: 1,
                img:'https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_5508_non-touch/in5508nt_cnb_00055lf110_gr.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=668&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=668,402',
                id: 4
            }
        ]
    }
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
