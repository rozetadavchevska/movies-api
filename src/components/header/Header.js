import React from 'react';
import {Link} from 'react-router-dom'; 
import {Navbar, Container, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFilm} from '@fortawesome/free-solid-svg-icons';
import './header.css';
import Search from '../search/Search';
// import { Route, Routes } from 'react-router';
// import Popular from '../popular/Popular';

const Header = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Container className="navbar">
            <Navbar.Brand as={Link} to='/' className="logo">
              <FontAwesomeIcon icon={faFilm} size="lg" color="white" className="logo-icon"/>
              Filmopedia
            </Navbar.Brand>
              <Nav className="nav">
                <Nav.Link className="home-link nav-link" as={Link} to='/'>
                  <span className="bar">Home</span>
                </Nav.Link>
                <Nav.Link className="movies-link nav-link" as={Link} to='/movies'>
                  <span className="bar">Movies</span>
                </Nav.Link>
                <Nav.Link className="tv-link nav-link" as={Link} to='/tv'>
                  <span className="bar">TV Shows</span>
                </Nav.Link>
                <Container className="search">
                  {/* <form className="inputSearch">
                    <input type="search" id="form" className="form-control" placeholder="Search"/>
                    <button type="submit" className="btn btn-search">
                      <FontAwesomeIcon icon={faSearch} size="lg" color="white" className="logo-icon"/>
                    </button>
                  </form> */}
                  <Search />
                </Container>
              </Nav>
          </Container>
        </Navbar>
    </>
  );
}

export default Header;