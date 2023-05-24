import React from "react";
import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <div className={styles.root}>
            <div className = {styles.Logo}><b>ROWI tech</b></div>
            <div className={styles.HeaderItems}>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/">Финансирование</NavLink>
                <NavLink to="/">Кредиты</NavLink>
                <NavLink to="/">Факторинг</NavLink>
                <NavLink to="/">Другое</NavLink>
            </div>
            <NavLink to="/aut" className={styles.LogIn}>Личный кабинет</NavLink>
        </div>
    );
}

export default Header;