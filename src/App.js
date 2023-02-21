import {React} from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Header from './components/header/Header';
import Home from './pages/Home';
import TvShows from './pages/TvShows';
import { Routes, Route } from 'react-router';
import MovieList from './components/movieListDetails/MovieList';
import MovieDetails from './components/movieListDetails/MovieDetails';
import SearchMovieResults from './components/searchMovie/SearchMovieResults';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/movies" element={ <MovieList />}/>
        <Route path="/movies/:id" element={ <MovieDetails />}/>
        <Route path="/tv" element={ <TvShows /> }/>
        <Route path="/search/:query" element={<SearchMovieResults />}/>
      </Routes>
    </>
  );
}

export default App;
