import React from 'react';
import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import "../styles/Login.css"

const ReservationPage = () => {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

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
        <input type="submit" value ="Pay for reservation"/>
        </form>
        <p>Or <a href = "/login">login</a> to make reservation quicker and collect loyalty points!</p>
    </div>
  )
};

export default ReservationPage;