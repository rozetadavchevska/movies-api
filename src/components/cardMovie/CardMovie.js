import React from 'react';
import './cardMovie.css';
import { Link } from 'react-router-dom';

function CardMovie({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
      </Link>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span>{movie.release_date}</span>
      </div>
    </div>
  );
}

export default CardMovie;


// const CardMovie = ({title, poster_path, vote_average, release_date, overview}) => {
//     const [show, setShow]=useState(false);

//     const handleShow=()=>setShow(true);
//     const handleClose=()=>setShow(false);
//     const API_IMG = ApiConfig.w500Image;
  
//     return (
//         <div className="card">
//             <div className="card-body">
//               <img className="card-img-top" src={API_IMG+poster_path} alt='Movie poster'/>
//               <h6>{title}</h6>
//               <div className="card-body">
//                   <button type="button" className="btn btn-view" onClick={handleShow} >View More</button>
//                   <Modal show={show} onHide={handleClose}>
//                       <Modal.Header closeButton>
//                         <Modal.Title></Modal.Title>
//                       </Modal.Header>
//                       <Modal.Body>
//                       <img className="card-img-top" alt='movie' src={API_IMG+poster_path} />
//                       <h3>{title}</h3>
//                       <h4>IMDb: {vote_average}</h4>
//                       <h5>Release Date: {release_date}</h5>
//                       <br></br>
//                       <h6>Overview</h6>
//                       <p>{overview}</p>
//                       </Modal.Body>
//                       <Modal.Footer>
//                           <Button variant="secondary" onClick={handleClose}>Close</Button>
//                       </Modal.Footer>
//                   </Modal>
//               </div>
//             </div>
//         </div>
//     )
// }

// export default CardMovie;