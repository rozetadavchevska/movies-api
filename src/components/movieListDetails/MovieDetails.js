import React, {useState, useEffect, useParams} from 'react';
import ApiConfig from '../../api/ApiConfig';
import CardMovie from '../cardMovie/CardMovie';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        async function fetchMovie() {
        const response = await fetch(
            `${ApiConfig.baseUrl}/movie/${id}?api_key=${ApiConfig.apiKey}`
        );
        const data = await response.json();
        setMovie(data);
        }
        fetchMovie();
    }, [id]);
    
    if (!movie) {
        return <div>Loading...</div>;
    }
      

    return (
        <div className="movie-details">
            <CardMovie movie={movie} />
            <div className="movie-description">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
    )
}

export default MovieDetails