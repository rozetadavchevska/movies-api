import React, {useState, useEffect, useParams} from 'react';
import ApiConfig from '../../api/ApiConfig';
import CardTvShow from '../cardTvShow/CardTvShow';

const TvDetails = () => {
    const { id } = useParams();
    const [tv, setTv] = useState(null);
    
    useEffect(() => {
        async function fetchTv() {
        const response = await fetch(
            `${ApiConfig.baseUrl}/tv/${id}?api_key=${ApiConfig.apiKey}`
        );
        const data = await response.json();
        setTv(data);
        }
        fetchTv();
    }, [id]);
    
    if (!tv) {
        return <div>Loading...</div>;
    }
      

    return (
        <div className="tvShow-details">
            <CardTvShow tv={tv} />
            <div className="tvShow-description">
              <h2>{tv.title}</h2>
              <p>{tv.overview}</p>
            </div>
          </div>
    )
}

export default TvDetails;