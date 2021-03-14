import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img:'./images/41SFcou7NsL._UX385_.jpg',
                    id: 1
                },
                {
                    price:999,
                    title:'Shirt',
                    qty:1,
                    img:'',
                    id: 2
                },
                {
                    price: 9999,
                    title: 'Phone',
                    qty: 1,
                    img:'',
                    id: 3
                },
                {
                    price: 99999,
                    title: 'Laptop',
                    qty: 1,
                    img:'',
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
    
    render(){
        const { products } = this.state;
      
        return(
            <div className="cart" style={styles.cart}>
                {products.map((product)=>{
                    return(
                        <CartItem 
                            product={product} 
                            key={product.id}
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDecreaseQuantity = {this.handleDecreaseQuantity} 
                            onDeleteProduct = {this.handleDeleteProduct}
                        />) 
                })}

            </div>
            
        );
    }
}
const styles = {
    cart:{
        //backgroundColor: 'grey'
    },
    
}
export default Cart;