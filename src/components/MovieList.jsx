import React from 'react';
import { Link } from 'react-router-dom';
import '../MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src={movie.posterURL} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>Rating: {movie.rating}</p>
          <Link to={`/movie/${index}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
