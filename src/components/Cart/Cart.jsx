import React from "react";
import styles from './Cart.module.scss'
import { NavLink } from "react-router-dom";

const Cart = ({name, imgURL,a, text}) =>{
    return(
        <div className={styles.root}>
            <div className={styles.Info}>
                <span>{name}</span>
                <img src={imgURL} alt="" />
                <div className={styles.Navl}><NavLink to={a}>{text}</NavLink></div>
                
            </div>
        </div>
    );
}

export default Cart;