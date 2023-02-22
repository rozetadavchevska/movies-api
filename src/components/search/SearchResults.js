import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiConfig from '../../api/ApiConfig';
import CardMovie from '../cardMovie/CardMovie';
import CardTvShow from '../cardTvShow/CardTvShow';
import './search.css';

const SearchResults = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await fetch(`${ApiConfig.baseUrl}search/movie?api_key=${ApiConfig.apiKey}&query=${query}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const searchTVShows = async () => {
      try {
        const response = await fetch(`${ApiConfig.baseUrl}search/tv?api_key=${ApiConfig.apiKey}&query=${query}`);
        const data = await response.json();
        setTVShows(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    searchMovies();
    searchTVShows();
  }, [query]);

  return (

    <div className='search-list'>
      <div className='results-container'>
        <h2 className='search-text'>Search results for "{query}"</h2>
        <div className='search-results'>
            
            {movies.length > 0 && (
              <div className='movie-grid'>
                <h3>Movies</h3>
                <div className="movies-search-grid">
                  {movies.map((movie) => (
                    <CardMovie key={movie.id} movie={movie} />
                  ))}
                </div>
              </div>
            )}
            {tvShows.length > 0 && (
              <div className='tvShow-grid'>
                <h3>Tv Shows</h3>
                <div className="tv-search-grid">
                  {tvShows.map((tv) => (
                    <CardTvShow key={tv.id} tv={tv} />
                  ))}
                </div>
              </div>
            )}
            {movies.length === 0 && tvShows.length === 0 && (
              <p>No results found.</p>
            )}
        </div>
      </div>
    </div>

  );
}

export default SearchResults;