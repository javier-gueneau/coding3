import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Add from './screens/Add';
import Edit from './screens/Edit';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>

          <Route path={'/new'} element={<Add/>} ></Route>
          <Route path={'/:id/edit'} element={<Edit/>} ></Route>
          <Route path={'/'} element={<Home/>} ></Route>
        
    </Routes>
    </BrowserRouter>


  );
}

export default App;
