import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
/* 
import List from '../components/List'; */


const Stock=({title,stocks,remove})=>{


return(
        <div className="App">

        <h1>purchases voo</h1>

        <p>this is title con Llaves  {title} </p>

        <table>
            <thead>
                <tr>
                    <th>Purchase Date</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map((j,i)=>(
                    <tr key={i}> 
                        <td>{j.purchaseDate} </td>  
                        <td>{j.amount} </td>  
                        <td>{j.price} </td>  
                        <td><button onClick={e=>remove(i,j._id)}></button> </td>  
                        </tr>
                ))}
            </tbody>

        </table>


        

      {/* <List/> */}

        </div>
    )
}

export default Stock;
