import React, { useState, useEffect} from 'react';
import ApiConfig from '../../api/ApiConfig';
import Card from '../card/Card';
import './popular.css';
// import Header from '../header/Header';

const Popular = () => {

    const [movieItems, setMovieItems] = useState([]);

    const API_MOVIE_POPULAR = ApiConfig.baseUrl + 'movie/popular?api_key=' + ApiConfig.apiKey;

    useEffect(()=>{
        const fetchPopular = async ()=>{
            const response = await fetch(API_MOVIE_POPULAR);
            const data = await response.json();
            setMovieItems(data.results);
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
                <h2 className='popularText'>Popular now</h2>
                <div className='grid'>
                    {movieItems.map((movieRequest)=>
                        <Card key={movieRequest.id} {...movieRequest} /> 
                    )}
                </div>
            </div>
        </div>
    )
}

export default Popular;