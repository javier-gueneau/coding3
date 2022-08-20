import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


const ProductList =props=>{
    const {products}=props;

    return(
        <>
        {/* <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
        </table> */}

        {products.map((p,index)=>{
            return <p key={index} ><Link to={`/${p._id}`} >{p.title} {/* {p._id} */}  </Link> </p>
        })}
        </>

    )
}

export default ProductList;
