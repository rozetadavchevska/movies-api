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
import { Helmet } from 'react-helmet'; 
import Icon from './assets/icon.svg';

function App() {

  return (
    <>
      <Helmet>
        <title>Filmopedia</title>
        <meta name="keywords" content="movies, tv shows, trending movie, trending tv shows, 
        popular movies, popular tv shows, movie, tv show, filmopedia, film, cinema, theatre, 
        actor, actress, actors, actresses, films, information, movie information, tv show information,
        season, seasons, episodes, episode, tv show episode, tv show season, cast, momvie cast, tv show cast"/>
        <meta name="description" content="Filmopedia is web app where you can ses which movies 
        and tv shows are popular or trending at the moment, while also having the ability to
        see detailed information about the movies and tv shows." />
        <link rel="icon" href={Icon}/>
      </Helmet>

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