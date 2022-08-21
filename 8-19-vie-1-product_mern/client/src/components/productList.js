import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


const ProductList =props=>{
    
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/list')
        .then(res=>{
            console.log(res);
            setProducts(res.data)
            })
      },[])

    const Eliminar=(i,id)=>{
        console.log('id:', id);
        
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                if(!res.data.error){
                    console.log("paso1");
                    axios.get('http://localhost:8000/api/product/list')
                    .then(res=>{
                        console.log('probando axios get', res);
                        setProducts(res.data) 
                    })
                }
                else{
                    console.log('error');
                }            
                })
    };
    
    return(
        <>
        
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    {/* <th>id</th> */}
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p,i)=>
                    <tr key={i}>
                        <td> <Link to={`/${p._id}`} >{p.title} </Link>  </td>
                        <td>{p.price}</td>
                        <td>{p.description}</td>
                        
                        <td> <Link to={`/${p._id}/edit`} >Editar</Link> </td>

                        <td><button onClick={e=>Eliminar(i,p._id)} >Eliminar</button></td>
                        </tr>
                        )
                }
            </tbody>
            </table>
        </>

    )
}

export default ProductList;
