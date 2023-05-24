import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import HomeOff from '../src/pages/HomeOff'
import HomeOn from '../src/pages/HomeOn'
import Authorization from './pages/Authorization';
import AccountClient from './pages/AccountClient/AccountClient';
import Meneger from '../src/pages/AccountMeneger/AccountMeneger';

function App() {

  const flag = "meneger";
  //const flag = "AutUser";
  //const flag = "";
  
  if(flag==="meneger"){
    return (
      <>
        <Header title1="Профиль" title2="Новые" title3="В обработке" title4="Завершенные"/>
          <Routes>
            <Route path='/' element = {<Meneger/>}/>
          </Routes>
      </>      
    )
  }
  else if(flag==="AutUser")
  return (
    <>   
      <Header title1="Главная" title2="Финансирование" title3="Кредиты" title4="Факторинг" title5="Другое"/>
        <Routes>
          <Route path='/' element = {<HomeOn/>}/>
        </Routes>
    </>
  );
  
  else
  return (
    <>   
      <Header title1="Главная" title2="Финансирование" title3="Кредиты" title4="Факторинг" title5="Другое"/>
        <Routes>
          <Route path='/' element = {<HomeOff/>}/>
        </Routes>
    </>
  );

}

export default App;
