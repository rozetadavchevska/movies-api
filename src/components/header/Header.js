import React from 'react';
import {Link} from 'react-router-dom'; 
import {Navbar, Container, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import './header.css';


const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Container className="navbar">
            <Navbar.Brand as={Link} to='/' className="logo">
              <FontAwesomeIcon icon={faFilm} size="lg" color="white" className="logo-icon"/>
              Filmopedia
            </Navbar.Brand>
              <Nav>
                <Nav.Link className="home-link nav-link" as={Link} to='/'>
                  Home
                  <span className="bar"></span>
                </Nav.Link>
                <Nav.Link className="movies-link nav-link" as={Link} to='/movies'>
                  Movies
                  <span className="bar"></span>
                </Nav.Link>
                <Nav.Link className="tv-link nav-link" as={Link} to='/tv'>
                  TV Shows
                  <span className="bar"></span>
                </Nav.Link>
              </Nav>
          </Container>
        </Navbar>
    </>
  );
}

export default Header;