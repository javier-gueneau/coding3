import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Add =()=>{
    
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const[amount,setAmount]=useState('');
    const[price,setPrice]=useState('');
    const[purchaseDate,setPurchaseDate]=useState('');
    const [error,setError]=useState('');

    const handleSubmit=e=>{
        e.preventDefault();
        console.log('activado handle Submit');
        //console.log(nombre);
        axios.post('http://localhost:8000/api/invest/create',{
            name:name,
            amount:amount,
            price:price,
            purchaseDate:purchaseDate
        })
        .then(res=>{
            console.log(res);
            if(res.data.errors){
                console.log(res.data.errors)
                setError(res.data.errors.nombre.message)
            }
            else{navigate('/')} 

        })
    }
    
    return(
        <>
        <p>this is add</p>
        <h1>  Favorite Authors</h1>
        <p> <Link to={'/'} > Home.</Link> </p>
        <p>Add a new Author:</p>
            
        <form onSubmit={handleSubmit} >
            <label>Name:
                <input type="text" onChange={(e)=>setName(e.target.value)} />
            </label>
            <label>Amount:
                <input type="text" onChange={(e)=>setAmount(e.target.value)} />
            </label>
            <label>Price:
                <input type="text" onChange={(e)=>setPrice(e.target.value)} />
            </label>
            <label>Pirchase Date:
                <input type="date" onChange={(e)=>setPurchaseDate(e.target.value)} />
            </label>
            <br/>
            <button>Cancel</button>
            <button>Submit</button>

            {error!='' ? <p> {error} </p> : null }

        </form>
        
        </>

    )
}

export default Add;
