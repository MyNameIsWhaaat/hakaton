import React from "react";
import styles from "./Registration.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const Registration = () =>{
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
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.Form}>
            <input {...register('FirstName', { required: true })} type="text" placeholder="Имя"/>
            <input {...register('Surname', { required: true })} type="text" placeholder="Фамилия"/>
            <input {...register('Patronomic', { required: true })} type="text" placeholder="Отчество"/>
            <input {...register('Email', { required: true })} type="text" placeholder="E-mail"/>
            <input {...register('Phone', { required: true })} type="text" placeholder="Номер телефона"/>
            <input {...register('Password', { required: true })} type="text" placeholder="Пароль"/>
            <input {...register('RepeatPassword', { required: true })} type="text" placeholder="Повторите пароль"/>
            {errors.FirstName && <p className={styles.ErrorFN}>*</p>}
            {errors.Surname && <p className={styles.ErrorSN}>*</p>}
            {errors.Patronomic && <p className={styles.ErrorPN}>*</p>}
            {errors.Email && <p className={styles.ErrorEm}>*</p>}
            {errors.Phone && <p className={styles.ErrorPh}>*</p>}
            {errors.Password && <p className={styles.ErrorPs}>*</p>}
            {errors.RepeatPassword && <p className={styles.ErrorRPS}>*</p>}
            <input disabled={!isValid} type="submit" />
        </div>
        </form>
        
    )
}

export default Registration;