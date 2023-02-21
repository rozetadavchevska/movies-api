import React, { useState, useEffect } from 'react';
import CardTvShow from '../cardTvShow/CardTvShow';
import ApiConfig from '../../api/ApiConfig';

function TvList() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    async function fetchTvShows() {
      const response = await fetch(
        `${ApiConfig.baseUrl}/tv/popular?api_key=${ApiConfig.apiKey}`
      );
      const data = await response.json();
      setTvShows(data.results);
    }
    fetchTvShows();
  }, []);

  return (
    <div className="tvShow-list">
      {tvShows.map(tv => (
        <CardTvShow key={tv.id} tv={tv} />
      ))}
    </div>
  );
}

export default TvList;
