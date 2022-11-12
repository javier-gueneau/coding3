import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React,{useState,useEffect, useContext, createContext} from 'react';
import Home from './screens/Home';

import Add from './screens/Add';
//import Edit from './screens/Edit';
import Stock from './components/Stock'
import VooStock from './screens/VooStock'
import ArkkStock from './screens/ArkkStock';
import BtcStock from './screens/BtcStock';
import Login from './components/LoginRegister';
import Register from './components/Register';
import { UserContext } from './context/userContext';
//import Istock from './screens/Istock'

function App() {

  const navigate=useNavigate();

  //const UserContext=createContext()

  //const[istock,setIstock]=useState('');
  //const UserState=useContext(UserContext)
  const [user,setUser]=useState(false)

const [userName,setUserName]=useState("Petey")

const userNameNow =useContext(UserContext);

  //const [loggedUser,setLoggedUser]=useState();

  useEffect(()=>{
    //axios.get('http://localhost:8000/api/checkauth')
    axios.get('/api/checkauth')
    .then((res)=>{
      console.log('this is GET CHECK AUTH (APP JS)....', res)
      //console.log('USE EFFECT IN APP.... this is user...', user)
      setUser(true)
      //navigate('/')
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    
    <>
      <UserContext.Provider value={userName} >


            <h1>hello buddy</h1>
            <h2>{`hello ${userName} `} </h2>
            <h2>{`hello ${userNameNow} `} </h2>
          <Routes>
                <Route path={'/new'} element={<Add/>} ></Route>
                
                {/* <Route path={'/:id/edit'} element={<Edit/>} ></Route>
      */}
                <Route path={'/stock1'} element={<Stock/>} ></Route>
                {/* <Route path='/:word' element={<Istock inputs={istock} setInputs={setIstock} />} ></Route> */}

                <Route path={'/voo'} element={<VooStock/>} ></Route>
                <Route path={'/arkk'} element={<ArkkStock/>} ></Route>
                <Route path={'/btc'} element={<BtcStock />} ></Route>

                <Route path={'/register'} element={<Register/>} ></Route>
                <Route path={'/'} element={<Home/>} ></Route>
                <Route path={'/login'} element={<Login/>} ></Route>
          </Routes>

        </UserContext.Provider>
    </>


  );
}

export default App;
