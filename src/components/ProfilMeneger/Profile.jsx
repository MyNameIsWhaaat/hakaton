import avatar from '../../img/block.png';
import { useState } from 'react';
import Select from 'react-select';
import Table from '../../components/TableForMeneger/Table';
import style from './Profile.scss';


const Profile = () => {

    //пробные данные менеджера
    const [manager, setManager] = useState({
        "name":"Анастасися",
        "idProduct":null
    });

    //поисковая строка
    const SearchBar = ({onChange, placeholder}) => {
        return (
          <div className="ab_ma_search">
            <input className="ab_ma_se_input" type="text" onChange={onChange} placeholder={placeholder}/>
          </div>
        );
    };

    //выпадающее меню dropdown
    const options = [
        { value: 'All', label: 'Все' },
        { value: 'New', label: 'Новые' },
        { value: 'Process', label: 'В обработке' },
        { value: 'Completed', label: 'Завершенные' }
    ];

    //стили dropdown
    const colourStyles = {
        control: styles => ({
            ...styles,
            backgroundColor: 'white',
            border:'1px solid black',
            borderRadius:'10px',
            cursor:'pointer',
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected, onClick}) => {
          const color = data.color;
          return {
            ...styles,
            color: 'rgba(18, 0, 32, 0.6)',
            cursor: isFocused? 'pointer': 'default',
            color: isFocused ? 'rgba(18, 0, 32, 1)' : 'rgba(18, 0, 32, 0.6)',
            backgroundColor: isFocused ? 'white' : 'white',
            backgroundColor: onClick ? 'white' : 'white',
            backgroundColor: isSelected ? 'rgba(220, 219, 232, 0.5)' : 'white',
          }
        }
    }

    //dropdown
    const MySelect = () => {
        return (
          <Select className='ma_select' options={options} placeholder="Статус" styles={colourStyles}/>
        );
    }

    //пробные данные таблицы пользователей
    const [table, setTable] = useState([
        {"id":5,
        "name":"Общажная Моня Ш.",
        "status":"Новый",
        "date":"24.05.2023",},
        {"id":4,
        "name":"Нечаев Денис А.",
        "status":"Новый",
        "date":"24.05.2023",},
        {"id":3,
        "name":"Бойко Иван А.",
        "status":"В обработке",
        "date":"23.05.2023",},
        {"id":2,
        "name":"Бегинина Ксения Д.",
        "status":"Завершено",
        "date":"22.05.2023",},
        {"id":1,
        "name":"Перминова Екатерина М.",
        "status":"Завершено",
        "date":"22.05.2023",},
    ]); 

    return(
        <div className='ma_profil'>
            <div className="about_ma">
                <div className='ab_ma_avatar'>
                    <img className="ab_ma_av_img" src={avatar} alt=""/>
                </div>
                <div className='ab_ma_info'>
                    <p className='ab_ma_name'>{manager.name}</p>
                    <p className='ab_ma_product'>
                        {manager.idProduct == null && "Менеджер поддержки"}
                        {manager.idProduct == 1 && "Менеджер кредита"}
                        {manager.idProduct == 2 && "Менеджер факторинга"}
                        {manager.idProduct == 3 && "Менеджер финансирования"}
                    </p>
                </div>
            </div>
            <div className='ma_pr_filters'>
                <SearchBar placeholder="Поиск по клиенту"/>
                <MySelect/>
            </div>
            <div className='ma_pr_table_name'>
                <p className='ma_pr_ta_na_text'>№</p>
                <p className='ma_pr_ta_na_text'>ФИО</p>
                <p className='ma_pr_ta_na_text'>Статус</p>
                <p className='ma_pr_ta_na_text'>Дата</p>
            </div>
            {table.map((t) => (
                <Table key={t.id} {...t} />
            ))}
        </div>
    );
  }
  
  export default Profile;