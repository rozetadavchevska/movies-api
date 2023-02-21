import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiConfig from '../../api/ApiConfig';

function SearchMovieResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      const response = await fetch(
        `${ApiConfig.baseUrl}/search/movie?api_key=${ApiConfig.apiKey}&query=${query}`
      );
      const data = await response.json();
      setResults(data.results);
    }
    fetchResults();
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <ul>
        {results.map(movie => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchMovieResults;
