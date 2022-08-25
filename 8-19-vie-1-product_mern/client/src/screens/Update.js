import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { Link, useParams } from 'react-router-dom';


const Update = props=>{
    const{id}=useParams("");
    const[title,setTitle]=useState("");
    const[price,setPrice]=useState("");
    const[description,setDescription]=useState("");
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/'+id)
        .then(res=>{
            setTitle(res.data.data.title);
            setPrice(res.data.data.price);
            setDescription(res.data.data.description);
            console.log(id)
            console.log(res.data.data.title)
        })
    },[])
    
    const update=e=>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/'+id,{
            title,
            price,
            description
        })
        .then(res=>console.log(res));
    }
    
    return(
        <div>
            <h1>Update a product</h1>
            <p>Title:{title} </p>
            <p>Price: {price} </p>
            <p>Description: {description} </p>
            <p>Id: {id} </p>


            <h1>Update a product</h1>
            <form onSubmit={update} >
                <p>
                    <label>Title</label><br/>
                    <input type="text" name="title" 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" name="price" 
                    value={price} 
                    onChange={(e)=>setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description:</label><br/>
                    <input type="text" name="description" 
                    value={description} 
                    onChange={(e)=>setDescription(e.target.value)} />
                </p>
                <input type="submit" />
            </form>

            <Link to={`/`} >Volver </Link>

        </div>

)
}

export default Update;