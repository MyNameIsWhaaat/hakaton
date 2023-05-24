import React from "react";
import styles from "./Registration.module.scss";
import { NavLink } from "react-router-dom";

const Registration = () =>{
    return(
        <div className={styles.Form}>
            <input type="text" placeholder="Имя"/>
            <input type="text" placeholder="Фамилия"/>
            <input type="text" placeholder="Отчество"/>
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Номер телефона"/>
            <NavLink>Зарегистрироваться</NavLink>
        </div>
        
    )
}

export default Registration;