import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import "../styles/MoviesCarousel.css"

const MoviesCarousel = ({...props}) => {
  const { scrollRef, next, prev } =
    useSnapCarousel();
  return (
    <div id = "movie-carousel">
      <button onClick={() => prev()}>{'\u2039'}</button>
      <ul
        ref={scrollRef}
      >
        <li></li>

        {Array.from({ length: 30 }).map((_, i) => (
          <li onClick={() => props.getMovieData(i)}>
            Movie {i}
          </li>
        ))}

        <li></li>
      </ul>
      <button onClick={() => next()}>{'\u203A'}</button>
    </div>
  );
};

export default MoviesCarousel;