import React from "react";
import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";

const Header = ({title1, title2, title3, title4, title5, url}) =>{
    return(
        <div className={styles.root}>
            <div className = {styles.Logo}><b>ROWI tech</b></div>
            <div className={styles.HeaderItems}>
                <NavLink to="/">{title1}</NavLink>
                <NavLink to="/">{title2}</NavLink>
                <NavLink to="/">{title3}</NavLink>
                <NavLink to="/">{title4}</NavLink>
                <NavLink to="/">{title5}</NavLink>
            </div>
            <NavLink to={url} className={styles.LogIn}>Личный кабинет</NavLink>
        </div>
    );
}

export default Header;