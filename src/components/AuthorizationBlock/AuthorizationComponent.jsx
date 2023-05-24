import React from "react";
import styles from "./AuthorizationComponent.module.scss";
import { NavLink } from "react-router-dom";

const AuthorizationComponent = () =>{
    //const AutorizationEmail = document.querySelector(".AutorizationEmail").value;
    //const AutorizationPassword = document.querySelector(".AutorizationPassword").value;
    //if (AutorizationPassword === "fsdfds") throw new Error();

    return(
        <div className={styles.Form}>
            <input type="text" placeholder="E-mail" className="AutorizationEmail"/>
            <input type="text" placeholder="Пароль" className="AutorizationPassword"/>
            <NavLink>Войти</NavLink>
        </div>
    )
}

export default AuthorizationComponent;