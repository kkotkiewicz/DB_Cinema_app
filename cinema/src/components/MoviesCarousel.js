import React, { useState, useEffect } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import "../styles/MoviesCarousel.css"
import { Movies } from '../services/Movies';

const MoviesCarousel = ({...props}) => {
  const { scrollRef, next, prev } =
    useSnapCarousel();

  const [movies, setMovies] = useState({rendered: false, movies:[]});

  useEffect(() => {
    Movies.getMovies().then((res) => {
      //console.log(res.data);
      setMovies({rendered: true, movies: res.data});
    })
    .catch((err) => {
        console.log(err)
    })
  }, []);

  return (
    <div id = "movie-carousel">
      <button onClick={() => prev()}>{'\u2039'}</button>
      {movies.rendered && <ul
        ref={scrollRef}
      >
        <li></li>

        {movies.movies.map((movie, i) => (
          <li key={movie.MOVIE_ID} onClick={() => props.getMovieData(movie.MOVIE_ID, movie.MOVIE_TITLE)} style={{ 
              backgroundImage: `url(${movie.MOVIE_IMG})` 
            }}>
          </li>
        ))}

        <li></li>
      </ul>}
      <button onClick={() => next()}>{'\u203A'}</button>
    </div>
  );
};

export default MoviesCarousel;