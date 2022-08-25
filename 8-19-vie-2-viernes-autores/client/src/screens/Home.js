import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';


const Home =()=>{
    
  
      
    return(
        <div className="App">
        this is home

<h1>  Favorite Authors</h1>
<p> <Link to={'/new'} >Add an author.</Link> </p>

      <List/>

        </div>
    )
}

export default Home;
