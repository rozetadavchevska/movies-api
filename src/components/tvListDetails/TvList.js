import React, { useState, useEffect } from 'react';
import CardTvShow from '../cardTvShow/CardTvShow';
import ApiConfig from '../../api/ApiConfig';
import './tvListDetails.css';

const TvList = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    async function fetchTvShows() {
      const response = await fetch(
        `${ApiConfig.baseUrl}/trending/tv/week?api_key=${ApiConfig.apiKey}`
      );
      const data = await response.json();
      setTvShows(data.results);
    }
    fetchTvShows();
  }, []);

  return (
    <div className="tv-list">
      <div className="tv-content">
        <h2 className='tv-text'>Trending Tv Shows This Week</h2>
        <div className='tv-grid'>
          {tvShows.map(tv => (
            <CardTvShow key={tv.id} tv={tv} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TvList;
