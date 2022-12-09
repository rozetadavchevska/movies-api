import React from 'react';
import {Routes ,Route ,Link} from 'react-router-dom'; 
import {Navbar, Container, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Movies from '../../pages/Movies';
import TvShows from '../../pages/TvShows';
import Home from '../../pages/Home';
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
                <Nav.Link className="nav-link" as={Link} to='/'>Home</Nav.Link>
                <Nav.Link className="nav-link" as={Link} to='/movies'>Movies</Nav.Link>
                <Nav.Link className="nav-link" as={Link} to='/tv'>Tv Shows</Nav.Link>
              </Nav>
          </Container>
        </Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/tv' element={<TvShows />}></Route>
      </Routes>
    </>
  );
}

export default Header;