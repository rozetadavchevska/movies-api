import React, { useState, useEffect } from 'react';
import CardMovie from '../cardMovie/CardMovie';
import ApiConfig from '../../api/ApiConfig';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${ApiConfig.baseUrl}/movie/popular?api_key=${ApiConfig.apiKey}`
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;