import React, { useEffect, useState } from 'react';
// import ApiConfig from '../api/ApiConfig';
// import CardMovie from '../components/cardMovie/CardMovie';

const Movies = ({match}) => {

//   const[movies, setMovies] = useState({});
//   // const API_MOVIES = ApiConfig.baseUrl + '/movie/' + {movie.params.id} + ApiConfig.apiKey;
  
//   useEffect(() => {
//       const fetchMovies = async ()=>{
//         const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.params.id}?api_key=<your_api_key>&language=en-US`);
//         const data =  await response.json();
//         setMovies(data.results);
//       }
//     fetchMovies();
//   }, [movie.params.id]);
  
  

//   return (
//     <div>
//       Movies
//       {/* {movies.map((movieT)=>
//                         <CardMovie key={movieT.id} {...movieT} /> 
//                     )} */}
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
//         alt={movies.title}
//       />
//       <p>{movies.overview}</p>
//     </div>
//   );

  const [movie, setMovie] = useState([]);
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=cced0a0c869ea68e359c6682cd3b1e86&language=en-US`
      );
      const data = await response.json();
      setMovie(data);
    };

    const fetchTvShow = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${match.params.id}?api_key=cced0a0c869ea68e359c6682cd3b1e86&language=en-US`
      );
      const data = await response.json();
      setTvShow(data);
    };

    fetchMovie();
    fetchTvShow();
  });

  return (
    <div>
      Movies
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>

      <h1>{tvShow.name}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
        alt={tvShow.name}
      />
      <p>{tvShow.overview}</p>
    </div>
  );




}

export default Movies;