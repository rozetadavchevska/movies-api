import React, { useState, useEffect} from 'react';
import ApiConfig from '../../api/ApiConfig';
import CardMovie from '../cardMovie/CardMovie';
import CardTvShow from '../cardTvShow/CardTvShow';
import './popular.css';

const Popular = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [popularTvShows, setPopularTvShows] = useState([]);

    const API_MOVIE_POPULAR = ApiConfig.baseUrl + 'movie/popular?api_key=' + ApiConfig.apiKey;
    const API_TV_POPULAR = ApiConfig.baseUrl + 'tv/popular?api_key=' + ApiConfig.apiKey;

    useEffect(()=>{
        const fetchPopular = async ()=>{
            const responseMovies = await fetch(API_MOVIE_POPULAR);
            const responseTv = await fetch(API_TV_POPULAR);
            const dataMovies = await responseMovies.json();
            const dataTv = await responseTv.json();
            setPopularMovies(dataMovies.results);
            setPopularTvShows(dataTv.results);
        };
        fetchPopular();
    });

    // const movie = async(e)=>{
    //     e.preventDefault();
    //     console.log('Searching');
    //     try{
    //         const search_url = ApiConfig.baseUrl + 'search/company?api_key' + ApiConfig.apiKey + '&page=1';
    //         const result = await fetch(search_url);
    //         const data =  await result.json();
    //         console.log(data);
    //         setMovieItems(data.results);
    //     } catch {
    //         console.log(e);
    //     }
    // }
    

    return (
        <div className="popularSection">
            <div className="popularContent">
                <h2 className='popularText'>Popular Movies Now</h2>
                <div className='grid'>
                    {popularMovies.map((movieRequest)=>
                        <CardMovie key={movieRequest.id} movie={movieRequest} />
                    )}
                </div>
            </div>
            <div className="popularContent">
                <h2 className='popularText'>Popular Tv Shows Now</h2>
                <div className='grid'>
                    {popularTvShows.map((tvRequest)=>
                        <CardTvShow key={tvRequest.id} movie={tvRequest} /> 
                    )}
                </div>
            </div>
        </div>
    )
}

export default Popular;