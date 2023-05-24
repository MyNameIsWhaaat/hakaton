import React from 'react';
import './Table.css';
import { NavLink } from 'react-router-dom';


function Table({id,name,status,date}) {
    return(
        <div className='ma_pr_table_info'>
            <p className='ma_pr_ta_na_te_1'>{id}</p>
            <p className='ma_pr_ta_na_te_2'>{name}</p>
            <p className='ma_pr_ta_na_te_3'>{status}</p>
            <p className='ma_pr_ta_na_te_4'>{date}</p>
            <NavLink className="ma_pr_ta_na_button">Чат</NavLink>
        </div>
    );
  }
  
  export default Table;