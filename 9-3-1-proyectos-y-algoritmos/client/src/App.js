import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React,{useState,useEffect, useContext} from 'react';
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
  //const[istock,setIstock]=useState('');
  //const UserState=useContext(UserContext)
  const [user,setUser]=useState(false)

  /* useEffect(()=>{
    axios.get('http://localhost:8000/api/checkauth')
    .then((res)=>{
      setUser(true)
      navigate('/dashboard')
    })
    .catch((err)=>{
      console.log(err)
    })
  },[]) */

  return (
    
    <>
      <UserContext.Provider value={{user, setUser}} >

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
                <Route path={'/login'} element={<Login/>} ></Route>
                <Route path={'/'} element={<Home/>} ></Route>
          </Routes>

        </UserContext.Provider>
    </>


  );
}

export default App;
