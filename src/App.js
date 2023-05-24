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

  const flag = "meneer";
  //const flag = "AutUser";
  //const flag = "";
  
  if(flag==="meneger"){
    return (
      <>
        
          <Routes>
            <Route path='/' element = {<Authorization/>}/>
            <Route path='/pisichka'/>
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
      
        <Routes>
          <Route path='/' element = {<HomeOff/>}/>
        </Routes>
        <Footer/>
    </>
  );

}

export default App;
