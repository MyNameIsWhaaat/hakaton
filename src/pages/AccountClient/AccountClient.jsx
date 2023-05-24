import React from "react";
import styles from "./AC.module.scss"
import Cart from "../../components/Cart/Cart"
import img7 from '../../img/img (6).png'
import img8 from '../../img/img (7).png'
import photo from '../../img/block.png'
import { NavLink } from "react-router-dom";

const AccountClient = () =>{
    const [value, setValue] = React.useState();
    const [valueEm, setValueEm] = React.useState();
    
    const inputRefPhone = React.useRef();
    const inputRefEmail = React.useRef();
    
    const onClickClearPh = () =>{
        setValue('');
        inputRefPhone.current.focus();
    };
    const onClickClearEm = () =>{
        setValueEm('');
        inputRefEmail.current.focus();
    };
    
    return(
        <div className={styles.root}>
            
            <div className={styles.Account}>
                <div className={styles.Info}>
                    <img src={photo} alt="" />
                    <div className={styles.Name}>
                        <span><b>Иван</b></span>
                        <span><b>Иванович</b></span>
                    </div>
                </div>
                
                <div className={styles.Phone}>
                    <p><b>Телефон</b></p>
                    
                    <span>Телефон нужен, чтобы подтверждать операции</span>
                    
                    <input className={styles.InputPhone} value={value} ref={inputRefPhone} onChange={()=>setValue(inputRefPhone.current.value)} type="text" placeholder="+7(XXX)-XXX-XX-XX"/>
                    {value &&
                    (<svg onClick={onClickClearPh} className={styles.clearPh} height="40" viewBox="0 0 48 48" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>)
                    }               
                
                </div>

                <div className={styles.Email}>
                    <p><b>E-mail</b></p>
                    <span>На почту приходят выписки и справки</span>
                    <input className={styles.InputEmail} value={valueEm} ref={inputRefEmail} onChange={()=>setValueEm(inputRefEmail.current.value)} type="text" placeholder="4646rc.if@gmail.com"/>
                    {
                        valueEm &&
                        (<svg onClick={onClickClearEm} className={styles.clearEm} height="40" viewBox="0 0 48 48" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>)
                             
                    }
                </div>

                <div className={styles.Social}>
                    <p><b>Социальные сети</b></p>
                    <span>Авторизуйтесь в соцсети, чтобы персонализировать ваш аккаунт</span>
                    <div className={styles.Socials}>
                        <NavLink>ВКонтакте</NavLink>
                        <NavLink>Одноклассники</NavLink>
                        <NavLink>Госуслуги</NavLink>
                    </div>
                </div>

            </div>
            

            <div className={styles.Products}>
                <span className={styles.SpanProd}><b>Ваши продукты</b></span>
                <div className={styles.ProductsItem}>
                    <Cart name="Кредит на исполнение контракта" imgURL={img7}  a={'/'} text={'Открыть чат'}/>
                    <Cart name="Финансирование селлеров маркетплейсов" imgURL={img8}  a={'/'} text={'Открыть чат'}/>
                </div>
            </div>

        </div>
    )
}

export default AccountClient;