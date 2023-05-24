import React from "react";
import styles from "./AuthorizationComponent.module.scss";
import { NavLink } from "react-router-dom";

const AuthorizationComponent = () =>{
    return(
        <div className={styles.Form}>
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Пароль"/>
            <NavLink>Войти</NavLink>
        </div>
    )
}

export default AuthorizationComponent;