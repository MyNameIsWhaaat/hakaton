import React from "react";
import styles from "./AuthorizationComponent.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const AuthorizationComponent = () =>{
    
    let navigate = useNavigate();
    

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({
        mode: "onBlur"
      });

      const onSubmit = (data) =>{
        navigate('/pisichka');
      };

      
    //const AutorizationEmail = document.querySelector(".AutorizationEmail").value;
    //const AutorizationPassword = document.querySelector(".AutorizationPassword").value;
    //if (AutorizationPassword === "fsdfds") throw new Error();

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.Form}>
            <input {...register('Email', { required: true })} type="text" placeholder="E-mail" className="AutorizationEmail"/>
            <input {...register('Password', { required: true })} type="text" placeholder="Пароль" className="AutorizationPassword"/>
            {errors.Password && <p className={styles.ErrorPas}>*</p>}
            {errors.Email && <p className={styles.ErrorEm}>*</p>}
            <input /*onClick={navigate('/pisichka')}*/ disabled={!isValid} type="submit" />
        </div>
        </form>
    )
}

export default AuthorizationComponent;