import React, { useReducer } from 'react';
import { useEffect, useState, createContext } from 'react';
import MoviesCarousel from './MoviesCarousel';
import "../styles/Main.css"
import { Movies } from '../services/Movies';
import SeancesList from './SeancesList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Seances } from '../services/Seances';
import SeanceRoom from './SeanceRoom';
import Login from './Login';
import Signin from './Signin';
import ReservationPage from './ReservationPage';

const SeatsContext = createContext();

const Main = () => {

    const[movie, setMovie] = useState({
        movieId: null,
        movieTitle: "",
        seances: [],
        movieDisplayed: false
    });

    const[seats, reserveSeats] = useState({})

    const getMovieData = (id, title) =>{
        Movies.getMovie(id).then((res) => {
            //console.log(res.data);
            setMovie({movieID: id, movieTitle: title, seances: res.data, movieDisplayed: true});
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <header><h1><b>C</b>inema<b>M</b>ax</h1></header>
            <hr></hr>
            <nav>
                <a href = "/"><button>Home</button></a>
                <a href = "/login"><button>LogIn</button></a>
                <a href = "/signup"><button>SignUp</button></a>
            </nav>
            <hr></hr>
            <BrowserRouter>
            <SeatsContext.Provider value={{seats, reserveSeats}}>
                <Routes>
                    <Route path = "/" element = {<>
                        <MoviesCarousel getMovieData = {getMovieData}/>
                        {movie.movieDisplayed && <SeancesList movieTitle = {movie.movieTitle} seances = {movie.seances} id = {movie.movieId}></SeancesList>}
                    </>}/>
                    <Route path = "/login" element = {<Login/>}/>
                    <Route path = "/signup" element = {<Signin/>}/>
                    
                        <Route path = "/seance/:id" element = {
                                <SeanceRoom/>
                        }/>
                        <Route path = "/reservation/:id" element = {
                                <ReservationPage/>
                        }/>
                </Routes>
            </SeatsContext.Provider>
            </BrowserRouter>
        </>
    );
};

export {Main, SeatsContext};