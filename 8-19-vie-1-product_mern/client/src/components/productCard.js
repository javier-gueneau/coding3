import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductCard =props=>{
    const {id,title} = useParams();
    const {data}=props;
    const[productTitle,setProductTitle]=useState("");
    const [productInfo,setProductInfo]=useState({
        title:"",
        price:"",
        description:""
    });
    
    console.log(data);
    /* console.log(useParams); */


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>{
            console.log("this is res...", res.data.data.title);
            setProductInfo({
                title:res.data.data.title,
                price:res.data.data.price,
                description:res.data.data.description,
            });
            setProductTitle(res.data.data.title)
        })
    },[])

    return(
        <>
        <h2> Product Title: {productInfo.title} </h2>
        <p> Product Price: {productInfo.price} </p>
        <p> Product Description: {productInfo.description   }</p>
        <p>Product ID: {id} </p>

        <Link to={`/`} >Volver </Link>
        </>
    )
}

export default ProductCard;