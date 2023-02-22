import React from 'react';
import './cardTvShow.css';
// import { Link } from 'react-router-dom';

const CardTvShow = ({ tv }) => {
  return (
    // <div className="tvShow-card">
    //   <Link to={`/tv/${tv.id}`}>
    //     <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.name} />
    //   </Link>
    //   <div className="tvShow-info">
    //     <h3>{tv.name}</h3>
    //     <span>{tv.first_air_date}</span>
    //   </div>
    // </div>

    <div className="card">
        <div className="card-body">
          <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.title}/>
          <h6>{tv.name}</h6>
          <div className="card-body">
            {/* <Link to={`/movies/${movie.id}`}>
              <button type="button" className="btn btn-view">View More</button>
            </Link> */}
              {/* <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <img className="card-img-top" alt='movie' src={API_IMG+poster_path} />
                  <h3>{title}</h3>
                  <h4>IMDb: {vote_average}</h4>
                  <h5>Release Date: {release_date}</h5>
                  <br></br>
                  <h6>Overview</h6>
                  <p>{overview}</p>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>Close</Button>
                  </Modal.Footer>
              </Modal> */}
          </div>
        </div>
    </div>
  );
}

export default CardTvShow;


// import React, { useState} from 'react';
// import ApiConfig from '../../api/ApiConfig';
// import {Modal, Button} from 'react-bootstrap';
// import './cardTvShow.css';

// const CardTvShow = ({name, poster_path, vote_average, first_air_date, overview}) => {
//     const [show, setShow]=useState(false);

//     const handleShow=()=>setShow(true);
//     const handleClose=()=>setShow(false);
//     const API_IMG = ApiConfig.w500Image;
  
//     return (
//         <div className="card">
//             <div className="card-body">
//               <img className="card-img-top" src={API_IMG+poster_path} alt='Movie poster'/>
//               <h6>{name}</h6>
//               <div className="card-body">
//                   <button type="button" className="btn btn-view" onClick={handleShow} >View More</button>
//                   <Modal show={show} onHide={handleClose}>
//                       <Modal.Header closeButton>
//                         <Modal.Title></Modal.Title>
//                       </Modal.Header>
//                       <Modal.Body>
//                       <img className="card-img-top" alt='movie' src={API_IMG+poster_path} />
//                       <h3>{name}</h3>
//                       <h4>IMDb: {vote_average}</h4>
//                       <h5>Release Date: {first_air_date}</h5>
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

// export default CardTvShow;