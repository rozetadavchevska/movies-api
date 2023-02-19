import React, { useState} from 'react';
import ApiConfig from '../../api/ApiConfig';
import {Modal, Button} from 'react-bootstrap';

const Card = ({title, poster, vote, releaseDate, overview}) => {
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    const API_IMG = ApiConfig.w500Image;
  
    return (
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMG+poster} alt='movie' />
                <div className="card-body">
                    <button type="button" className="btn btn-dark"  >View More</button>
                    <Modal show={show} onClick={handleShow} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" alt='movie' style={{width:'14rem'}}src={API_IMG+poster} />
                      <h3>{title}</h3>
                      <h4>IMDb: {vote}</h4>
                      <h5>Release Date: {releaseDate}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default Card;