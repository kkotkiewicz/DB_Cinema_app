import React from 'react';
import { useEffect, useState } from 'react';
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

const Main = () => {
    const[movie, setMovie] = useState({
        movieId: null,
        seances: [],
        movieDisplayed: false
    });

    const getMovieData = (id) =>{
        Movies.getMovie(id).then((res) => {
            //console.log(res.data);
            setMovie({movieId: id, seances: res.data.seances, movieDisplayed: true});
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
                <Routes>
                    <Route path = "/" element = {<>
                        <MoviesCarousel getMovieData = {getMovieData}/>
                        {movie.movieDisplayed && <SeancesList seances = {movie.seances} id = {movie.movieId}></SeancesList>}
                    </>}/>
                    <Route path = "/login" element = {<Login/>}/>
                    <Route path = "/signup" element = {<Signin/>}/>
                    <Route path = "/seance/:id" element = {<SeanceRoom/>}/>
                    <Route path = "/reservation/:id" element = {<ReservationPage/>}/>
                </Routes>
            </BrowserRouter>
            {/* reducer z akcjami i kontext który obsługuje te rzeczy (useContext, useReducer) */}
        </>
    );
};

export default Main;