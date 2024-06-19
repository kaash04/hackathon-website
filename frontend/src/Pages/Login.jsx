import React from 'react'
// import '../styles/registration.css';
import { useState } from 'react';

function Login() {


const [user,setUser]=useState({
email:'',
password:'',

});

const handleChange=(e)=>{
   
    let name=e.target.name;
    let value=e.target.value;

    setUser({
        ...user,
        [name]:value,
    })

}
const handleSubmit=(e)=>{
e.preventDefault();
console.log(user);
alert(user);
}
  return (
   <>

<div className="form-container">
            <form  onSubmit={handleSubmit} className="registration-form">
                <h2>Login Form</h2>
               
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={user.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password" 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                
                <button type="submit">Login</button>
            </form>
        </div>
   </>
  )
}

export default Login;
