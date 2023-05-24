import React from "react";
import styles from './Home.module.scss'
import Cart from '../components/Cart/Cart'
import img from '../img/img.png'
import img1 from '../img/img (1).png'
import img2 from '../img/img (2).png'
import img3 from '../img/img (3).png'

import img5 from '../img/img (4).png'
import img6 from '../img/img (5).png'
import img7 from '../img/img (6).png'
import img8 from '../img/img (7).png'

import Header from '../components/Header/Header'

const HomeOff = () =>{
    return(
        <>
        <Header title1="Главная" title2="Финансирование" title3="Кредиты" title4="Факторинг" title5="Другое" url="/aut"/>
        <div className={styles.root}>
            <div className={styles.Info}>
                <span className={styles.SpanOne}> <b> <span className={styles.Finans}> Финансируем</span> малый и <br /> средний бизнес. <br /> Быстро и по делу </b></span>
                <span className={styles.SpanTwo}>Оставьте заявку на любой продукт и получите решение сегодня</span>
            </div>
            <div className={styles.AllCartsContainer}>
                <div className={styles.FirstCartsContainer}>
                    <Cart name="Банковские гарантии" imgURL={img5} a={'/'} text={'Подробности'}/>
                    <Cart name="Факторинг" imgURL={img6} a={'/'} text={'Подробности'}/>
                </div>
                <div className={styles.SecondCartsContainer}>
                    <Cart name="Кредит на исполнение контракта" imgURL={img7} a={'/'} text={'Подробности'}/>
                    <Cart name="Финансирование селлеров маркетплейсов" imgURL={img8} a={'/'} text={'Подробности'}/>
                </div>
            </div>
        </div>
        </>
    );
}

export default HomeOff;