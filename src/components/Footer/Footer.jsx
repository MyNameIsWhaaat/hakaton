import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = ()=>{
    return(
        <div className={styles.root}>
            <div className={styles.Lable}>
                    <span>ROWI</span>
            </div>

            <div className={styles.SuperDiv}>
                
                
                
                <div className={styles.FerstDiv}>
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/">О нас</NavLink>
                    <NavLink to="/">Блог</NavLink>
                    <NavLink to="/">Карьера</NavLink>
                    <NavLink to="/">Стать агентом</NavLink>
                </div>
                
                <div className={styles.SecondDiv}>
                    <NavLink to="/">Факторинг</NavLink>
                    <NavLink to="/">Гарантии</NavLink>
                    <NavLink to="/">Кредит на госконтракты</NavLink>
                    <NavLink to="/">Для селлеров</NavLink> 
                </div>
                
                <div>
                
                <div className={styles.ThirdDiv}>
                    <span>+7 (800) 551 46 16</span>
                    <span>ООО «РОВИ Факторинг Плюс»</span>
                    <span>КИВИ Банк (АО)</span>
                    <span>Документы</span>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default Footer;