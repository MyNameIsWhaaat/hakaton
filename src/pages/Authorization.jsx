import React from "react";
import styles from "./Aut.module.scss";
import AuthorizationComponent from "../components/AuthorizationBlock/AuthorizationComponent";
import Registration from "../components/Registration/Registration";
import { NavLink } from "react-router-dom";
import { render } from "@testing-library/react";
import { useState } from "react";

const Authorization = () =>{
    const [isReg, setIsReg]= React.useState(false);
    const aut = <AuthorizationComponent/>;
    const reg = <Registration/>

    return(
        <div className={styles.root}>
            <div className={styles.autBlock}>
                <div className={styles.LogInGogle}>
                    <div className={styles.LogInGogleItems}>
                        <span><b>ROWI tech</b></span>
                        <a href="">Войти с помощью Google+</a>
                        
                    </div>
                        
                    
                    </div>
                <div className={styles.LogIn}>
                    <div className={styles.AutReg}>
                        <NavLink onClick={()=>setIsReg(false)}>Войти</NavLink>
                        <NavLink onClick={()=>setIsReg(true)}>Регистрация</NavLink>
                        <NavLink to='/'>
                            <svg width="60" height="60" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55.5834 55.5833L36.4167 36.4167" stroke="#160042" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M36.4167 55.5833L55.5834 36.4167" stroke="#160042" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </NavLink>
                    </div>
                    <div>
                        {
                            isReg ? reg : aut 
                        }
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Authorization;