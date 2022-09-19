import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';

import Add from './screens/Add';
//import Edit from './screens/Edit';
import Stock from './components/Stock'
import VooStock from './screens/VooStock'
import ArkkStock from './screens/ArkkStock';
import BtcStock from './screens/BtcStock';
//import Istock from './screens/Istock'

function App() {

const[istock,setIstock]=useState('');

  return (
    
    <BrowserRouter>
    <Routes>

          <Route path={'/new'} element={<Add/>} ></Route>
          
          {/* <Route path={'/:id/edit'} element={<Edit/>} ></Route>
 */}
          <Route path={'/'} element={<Home/>} ></Route>
          <Route path={'/stock1'} element={<Stock/>} ></Route>
          {/* <Route path='/:word' element={<Istock inputs={istock} setInputs={setIstock} />} ></Route> */}

          <Route path={'/voo'} element={<VooStock/>} ></Route>
          <Route path={'/arkk'} element={<ArkkStock/>} ></Route>
          <Route path={'/btc'} element={<BtcStock />} ></Route>


    </Routes>
    </BrowserRouter>


  );
}

export default App;
