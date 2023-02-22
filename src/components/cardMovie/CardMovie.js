import React from 'react';
import './cardMovie.css';
import { Link } from 'react-router-dom';


const CardMovie = ({ movie }) => {
  return (
    <>
    <div className="card">
        <div className="card-body">
          <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
          <h6>{movie.title}</h6>
          <div className="card-body">
            <Link to={`/movies/${movie.id}`}>
                <button type="button" className="btn btn-view">View More</button>
            </Link>
          </div>
        </div>
    </div>
    </>
    
  );
}

export default CardMovie;