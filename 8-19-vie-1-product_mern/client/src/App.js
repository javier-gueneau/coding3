import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ProductList from './components/productList'
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import ProductCard from './components/productCard';

function App() {

  
  
  return (
    
      <Routes>
          <Route path={'/:id'} element={<ProductCard/>} ></Route>

          <Route path={'/'} element={<Home/>} ></Route>
      </Routes>


  );
}

export default App;
