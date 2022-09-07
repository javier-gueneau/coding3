import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
/* 
import List from '../components/List'; */
import Stock from '../components/Stock'


const Home =()=>{

    const [stocks,setStocks]=useState([]);
    const [voo,setVoo]=useState([]);
    const [arkk,setArkk]=useState([]);
    const [btc,setBtc]=useState([]);
    
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/invest/list')
        .then(res=>{
            console.log('this is res.....', res)
            const voo_temp=[]
            const arkk_temp=[]
            const btc_temp=[]
            res.data.forEach((purchase)=>{
              if(purchase.name==="voo"){
                voo_temp.push(purchase)
              } else if (purchase.name==="arkk"){
                arkk_temp.push(purchase)
              } else {
                btc_temp.push(purchase)
              }
            })
            setVoo(voo_temp)
            setArkk
            
            setStocks(res.data)
            })
      },[])
  
      
      const remove=(s,id)=>{
        console.log('Removing')
        
        axios.delete(`http://localhost:8000/api/invest/${id}`)
        .then(res=>{
            if(!res.data.error){
                axios.get('http://localhost:8000/api/invest/list')
                .then(res=>{
                    setStocks(res.data) 
                })
            }
            else{
                console.log('Error');
            }            
            })
    }

    return(
        <div className="App">

        <h1>stocks</h1>

          <Stock title={"voo"} stocks={voo} remove={remove} />
        
        </div>
    )
}

export default Home;
