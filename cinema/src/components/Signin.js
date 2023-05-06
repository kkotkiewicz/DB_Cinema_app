import React from 'react';
import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import "../styles/Login.css"

const Signin = () => {
    const [inputs, setInputs] = useState({});
    const [err, setErr] = useImmer({
        password:{text: "Too short password", show: false}, 
        wrongCredentials: {text: "Wrong credentials", show: false}});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setErr(x=>{x.password.show = (name == "password" && value.length < 8)});
    console.log(err);

    setInputs(values => ({...values, [name]:value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div className="form-style-8">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
        <label>Enter your email:
        <input 
            type="text" 
            name="email" 
            value={inputs.username || ""} 
            onChange={handleChange}
        />
        </label>
        <label>Enter your name:
            <input 
            type="text" 
            name="username" 
            value={inputs.password || ""} 
            onChange={handleChange}
            />
        </label>
        <label>Enter your lastname:
            <input 
            type="text" 
            name="username" 
            value={inputs.password || ""} 
            onChange={handleChange}
            />
        </label>
        <label>Enter your password:
            <input 
            type="password" 
            name="password" 
            value={inputs.password || ""} 
            onChange={handleChange}
            />
        </label>

        <input type="submit" value ="Submit"/>
        </form>

        <div className = "errors">
            {Object.keys(err).map((key, index) => (
                err[key]["show"]?
                    (<p>{err[key]["text"]}</p>):null       
            ))}
        </div>
    </div>
  )
};

export default Signin;