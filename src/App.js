import {React} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Header from './components/header/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router';
import MovieList from './components/movieListDetails/MovieList';
import MovieDetails from './components/movieListDetails/MovieDetails';
import SearchResults from './components/search/SearchResults';
import TvList from './components/tvListDetails/TvList';
import TvDetails from './components/tvListDetails/TvDetails';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/movies" element={ <MovieList />}/>
        <Route path="/movies/:id" element={ <MovieDetails />}/>
        <Route path="/tv" element={ <TvList /> }/>
        <Route path="/tv/:id" element={ <TvDetails /> }/>
        <Route path="/search/:query" element={<SearchResults />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;