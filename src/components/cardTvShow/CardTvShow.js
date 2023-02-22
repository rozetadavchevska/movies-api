import React from 'react';
import './cardTvShow.css';
import { Link } from 'react-router-dom';


const CardTvShow = ({ tv }) => {
  return (
    <>
    <div className="card">
        <div className="card-body">
          <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.name}/>
          <h6>{tv.name}</h6>
          <div className="card-body">
            <Link to={`/tv/${tv.id}`}>
                <button type="button" className="btn btn-view">View More</button>
            </Link>
          </div>
        </div>
    </div>
    </>
    
  );
}

export default CardTvShow;