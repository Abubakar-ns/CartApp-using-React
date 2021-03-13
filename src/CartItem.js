import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price: 999,
            title: 'Phone',
            qty: 1,
            img:''
        }
        //this.increaseQuantity= this.increaseQuantity.bind(this);
    }
    increaseQuantity=()=>{
        //this.state.qty+=1;
        console.log('this.state.price',this.state.qty);
        //setSte form 1 uses shallow merging only changes qty
        //this.setState({
            //qty:this.state.qty+1,
        //});
        //setstate form 2
        this.setState((prevState)=>{
            return {
                qty: prevState.qty+1
            }
        });
    }
    decreaseQuantity=()=>{
     
        const {qty} = this.state;
        if(qty===0){
            return;
        }


        this.setState((prevState)=>{
            return {
                qty: prevState.qty-1
            }
        });
    }

    render(){
        console.log()
    const { price,title,qty}= this.props.product; {/*object destructuring (I want these properties from above constructor)*/}
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}} >{price}</div>
                    <div style={{color:'#777'}} >{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                            alt="Add" 
                            className="action-icons" 
                            src="./images/992651.svg"
                            onClick={this.increaseQuantity}
                         />
                        <img 
                            alt="Remove" 
                            className="action-icons" 
                            src="./images/992683.svg"
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="Delete" 
                            className="action-icons" 
                            src="./images/3096673.svg"
                        />

                    </div>
                </div>
            </div>
        )
    }
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#777'


    }
}
export default CartItem;