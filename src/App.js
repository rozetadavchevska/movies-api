import {React, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8de1536';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('Spiderman');
  },[]);

  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className='search'>
        <input 
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' onClick={()=>searchMovies(searchTerm)}/>
      </div>

      {
        movies?.length>0
        ?(
          <div className='container'>
            {
              movies.map((movie)=>(
                <MovieCard movie={movie}/>
              ))
            }
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )      
      }

    </div>
  );
}

export default App;
