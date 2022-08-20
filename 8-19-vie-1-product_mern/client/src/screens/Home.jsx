import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ProductList from '../components/productList'

const Home =()=>{
    
    const[title,setTitle]=useState("");
      const[price,setPrice]=useState("");
      const[description,setDescription]=useState("");
      const[products,setProducts]=useState([]);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        //alert('SUBMITTING PRODUCT FORM')
        axios.post('http://localhost:8000/api/product/create',{
          title,
          price,
          description
        })
        .then(res=>{
          console.log(res);
          setProducts([...products,res.data])
        })
      }
    
      useEffect(()=>{
        axios.get('http://localhost:8000/api/product/list')
        .then(res=>{
            console.log(res);
            setProducts(res.data) 
                })
    },[])

    return(
        <div className="App">
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <label className="label-input-wrp">
                Title 
                <input type="text" onChange={e=>setTitle(e.target.value)} />
                </label>
                <label className="label-input-wrp">
                Price
                <input type="number" onChange={e=>setPrice(e.target.value)}/>
                </label>
                <label className="label-input-wrp">
                Description
                <input type="text" onChange={e=>setDescription(e.target.value)}/>
                </label>
                <button>Create</button>
            </form>

            <ProductList products={products}/>

        </div>
    )
}

export default Home;
