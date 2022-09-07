import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


const List =props=>{
    
    const[autores,setAutores]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/autores/list')
        .then(res=>{
            console.log('a ver', res.data);
            setAutores(res.data)
            })
      },[])

    const Eliminar=(i,id)=>{
        console.log('id:', id);
        
        axios.delete(`http://localhost:8000/api/autores/${id}`)
            .then(res=>{
                if(!res.data.error){
                    console.log("paso1");
                    axios.get('http://localhost:8000/api/autores/list')
                    .then(res=>{
                        console.log('probando axios get', res);
                        setAutores(res.data) 
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
                    <th>Autor</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {
                    autores.map((p,i)=>
                    <tr className={i%2==0 ? 'white':'gray'} key={i}>
                        <td>{p.nombre}</td>
                        
                        <td className='tabla-botones'> <Link className='boton' to={`/${p._id}/edit`} 
                        > <i className="fa-solid fa-pen"></i> Editar</Link> 
                        <button className='boton' onClick={e=>Eliminar(i,p._id)} >Eliminar</button></td>

                    </tr>
                        )
                }
            </tbody>
            </table>
        </>

    )
}

export default List;
