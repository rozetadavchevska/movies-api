import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ApiConfig from '../../api/ApiConfig';
import './tvListDetails.css';


const TvDetails = () => {
    const { id } = useParams();
    const [tv, setTv] = useState(null);
  
    useEffect(() => {
      const fetchTv = async () => {
        try {
          const response = await fetch(
            `${ApiConfig.baseUrl}/tv/${id}?api_key=${ApiConfig.apiKey}`
          );
          const data = await response.json();
          setTv(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchTv();
    }, [id]);

    if (!tv) {
      return <div>Loading...</div>;
    }

    return (
        <>
        <div className="tv-details">
            <img className='tv-background' src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`} alt={tv.name} />
            <div className='tv-details-content'>
                <div>
                    <img className='tv-poster' src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.nae} />
                </div>
                <div className="tv-description">
                    <h1>{tv.name}</h1>
                    <h5>Overview: {tv.overview}</h5>
                    <p>First air date: {tv.first_air_date}</p>
                    <p>First air date: {tv.last_air_date}</p>
                    <p>Episode runtime: {tv.episode_run_time} minutes</p>
                    <p>Seasons: {tv.number_of_seasons}</p>
                    <p>Episodes: {tv.number_of_episodes}</p>
                    <p>Raiting: {tv.vote_average}</p>
                    <p>Official website: <a href={tv.homepage}>{tv.homepage}</a></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default TvDetails;