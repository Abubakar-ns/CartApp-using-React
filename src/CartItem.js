import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'#777'}} >Rs 9999</div>
                    <div style={{color:'#777'}} >Qty:1</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img alt="Add" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1615535381~hmac=b27509289ba3bfdd15c31e1c42be0f39" />
                        <img alt="Remove" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1615535339~hmac=6ed6edfdcec9b977b93b9494c0477d13" />
                        <img alt="Delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1615535400~hmac=93e37fcad67c2429b76526bd95087641" />

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