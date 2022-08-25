import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Add =()=>{
    
    const navigate=useNavigate();
    const [nombre,setNombre]=useState('');
    const [error,setError]=useState('');

    const handleSubmit=e=>{
        e.preventDefault();
        console.log('activado handle Submit');
        console.log(nombre);
        axios.post('http://localhost:8000/api/autores/create',{
            nombre
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
                <input type="text" onChange={(e)=>setNombre(e.target.value)} />
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
