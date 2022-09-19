import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Login=()=>{
    const navigate=useNavigate()
    const {user,setUser}= useContext(UserContext)

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
    const handleLogin=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/login',{
            "email":email,
            "password":password
        })
        .then((res)=>{
            console.log(res)
            setUser(true)
            navigate('/dashboard')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="email" >Email</label>
                <input type='text'id="email" onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="password" >Password</label>
                <input type='password'id="password" onChange={(e)=>setPassword(e.target.value)} />
                <button>Login</button>
            </form>

            <Link to={'/register'} >Need an account? .. Register now!</Link>

        </div>
    )
}

export default Login;