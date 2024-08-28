
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../MovieDescription.css';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies[id];

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-description">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div className="trailer">
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title={`${movie.title} trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Back to Movie List</Link>
    </div>
  );
};

export default MovieDescription;
