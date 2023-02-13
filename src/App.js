import {React} from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Header from './components/header/Header';
import Home from './pages/Home';
import Movies from  './pages/Movies';
import TvShows from './pages/TvShows';
import { Routes, Route } from 'react-router';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/movies" element={ <Movies /> }/>
        <Route path="/tv" element={ <TvShows /> }/>
      </Routes>
    </>
  );
}

export default App;
