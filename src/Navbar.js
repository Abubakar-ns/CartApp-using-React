import { findByLabelText } from '@testing-library/dom';
import React from 'react';

const Navbar = (props)=>{
   
       return(
           <div style={styles.nav}>
               <div style={styles.cartIconContainer}>
                   <img style={styles.cartIcon} src="./images/7.webp"/>
                   <span style={styles.cartSize} >4</span>
               </div>
           </div>
       );
}
const styles={
    nav:{
        height: 70,
        background: 'rgb(0 0 0)',
        display: 'flex',
        justifyContent: 'flex-end',
        alighnItems: 'center',
    },
    cartIcon:{
        height: 52,
        marginLeft: 32,
    },
    cartIconContainer:{
        position: 'relative'
    },
    cartSize:{
        color:'white',
        background: '#a52929',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: '0',
        top: '-9'
    }

}
export default Navbar;