import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ApiConfig from '../../api/ApiConfig';
import './movieListDetails.css';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const response = await fetch(
            `${ApiConfig.baseUrl}/movie/${id}?api_key=${ApiConfig.apiKey}`
          );
          const data = await response.json();
          setMovie(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchMovie();
    }, [id]);

    if (!movie) {
      return <div>Loading...</div>;
    }

    return (
        <>
        <div className="movie-details">
            <img className='movie-background' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
            <div className='movie-details-content'>
                <div>
                    <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="movie-description">
                    <h1>{movie.title}</h1>
                    <h5>Overview: {movie.overview}</h5>
                    <p>Release date: {movie.release_date}</p>
                    <p>Runtime: {movie.runtime} minutes</p>
                    <p>Budget: ${movie.budget}</p>
                    <p>Revenue: ${movie.revenue}</p>
                    <p>Raiting: {movie.vote_average}</p>
                    <p>Official website: <a href={movie.homepage}>{movie.homepage}</a></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieDetails;