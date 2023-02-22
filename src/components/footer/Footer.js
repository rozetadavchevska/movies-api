import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFilm} from '@fortawesome/free-solid-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container footer-container">
        <div className="footer-logo">
          <FontAwesomeIcon icon={faFilm} size="lg" color="white" className="footer-logo-icon"/>
          Filmopedia
        </div>
        <div className="footer-nav-links">
          <ul className="footer-nav">
            <li className='footer-nav-link'>
              <Link to="/" className='text-white'>
                <span className="bar">Home</span>
              </Link>
            </li>
            <li className='footer-nav-link'>
              <Link to="/movies" className='text-white'>
                <span className="bar">Movies</span>
              </Link>
            </li>
            <li className='footer-nav-link'>
              <Link to="/tvshows" className='text-white'>
                <span className="bar">Tv Shows</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <hr className='footer-hr' />
          <p className="text-center">Copyright &copy; 2023 Filmopedia. Developed by Rozeta Davchevska</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;