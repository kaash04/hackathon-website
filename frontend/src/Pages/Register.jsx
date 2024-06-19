import React from 'react'
// import '../styles/registration.css';
import { useState } from 'react';

function Register() {


const [user,setUser]=useState({
username:'',
email:'',
password:'',
confirmPassword:''
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
                <h2>Register</h2>
                <label>
                    Username:
                    <input 
                        type="text" 
                        name="username" 
                        value={user.username} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
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
                <label>
                    Confirm Password:
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        value={user.confirmPassword} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
   </>
  )
}

export default Register;
