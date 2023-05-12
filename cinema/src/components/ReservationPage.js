import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { SeatsContext } from './Main';
import "../styles/Login.css"

const ReservationPage = (props) => {
    const [inputs, setInputs] = useState({});
    const [logged, checkLogin] = useState(false);
    const {seats, reserveSeats} = useContext(SeatsContext);

    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]:value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(seats);
  }

  return (
    <>{!logged ?
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
    :<button value="Pay for reservation"></button>}</>
  )
};

export default ReservationPage;