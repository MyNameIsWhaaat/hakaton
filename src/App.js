import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import HomeOff from '../src/pages/HomeOff'
import HomeOn from '../src/pages/HomeOn'
import Authorization from './pages/Authorization';
import AccountClient from './pages/AccountClient/AccountClient';

function App() {
  const flag = false;
  if(!flag){
    return (
      <>
        <Authorization/>
      </>      
    )
  }
  return (
    <>   
      <Header/>
      <Routes>
        <Route path='/' element = {<AccountClient/>}/>
        <Route path='/on' element = {<HomeOn/>}/>
        <Route path='/aut' element = {<Authorization/> }/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
