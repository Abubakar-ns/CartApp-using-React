import React from 'react';

const CartItem = (props)=> {

        //console.log('this.props',props);
        const { price,title,qty}= props.product; {/*object destructuring (I want these properties from above constructor)*/}
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = props; {/* on incr or decr we need props to dec or inc quantity so wo destructured here */}
        return(
            <div className="cart-item" style={styles.cartItem}>
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
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
                            onClick={() => onIncreaseQuantity(product)}
                         />
                        <img 
                            alt="Remove" 
                            className="action-icons" 
                            src="./images/992683.svg"
                            onClick={()=> onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="Delete" 
                            className="action-icons" 
                            src="./images/3096673.svg"
                            onClick={()=> onDeleteProduct(product.id)}
                        />

                    </div>
                </div>
            </div>
        )
    
}
const styles = {
    image: {
        height: 110,
        width: 145,
        borderRadius: 4,
        background: '#777'
    },
    cartItem:{
        marginTop: '4%',
    }
    
}
export default CartItem;