import React, { useState, useEffect } from 'react';
import CardMovie from '../cardMovie/CardMovie';
import ApiConfig from '../../api/ApiConfig';
import './movieListDetails.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${ApiConfig.baseUrl}/trending/movie/week?api_key=${ApiConfig.apiKey}`
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);

  return (
    <div className="movies-list">
      <div className="movies-content">
        <h2 className='movies-text'>Trending Movies This Week</h2>
        <div className='movies-grid'>
          {movies.map(movie => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;