import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Edit =props=>{
    
    const navigate=useNavigate();
        const [nombre,setNombre]=useState('');
        const [error,setError]=useState('');
        const {id}=useParams();
        
        useEffect(()=>{
            axios.get(`http://localhost:8000/api/autores/${id}`)
            .then(res=>{
                console.log('a ver', res);
                setNombre(res.data.data.nombre)
                })
          },[])

        const handleSubmit=e=>{
            e.preventDefault();
            console.log('activado handle Submit');
            console.log(nombre);
            axios.put(`http://localhost:8000/api/autores/${id}`,{
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
        <p>this is edit</p>
        
        <h1>  Favorite Authors</h1>
        <p> <Link to={'/'} > Home.</Link> </p>
        <p>Edit</p>
        
        <form onSubmit={handleSubmit} >
            <label>Name:
                <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            </label>
            <br/>
            <button>Cancel</button>
            <button>Submit</button>

            {error!='' ? <p> {error} </p> : null }

        </form>


        </>

    )
}

export default Edit;
