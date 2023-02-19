import React, { useState, useEffect} from 'react';
import ApiConfig from '../../api/ApiConfig';
import Card from '../card/Card';
import './popular.css';

const Popular = () => {

    const [movieItems, setMovieItems] = useState([]);

    const API_MOVIE_POPULAR = ApiConfig.baseUrl + 'movie/popular?api_key=' + ApiConfig.apiKey;

    useEffect(()=>{
        fetch(API_MOVIE_POPULAR)
        .then((result) => result.json())
        .then(data => {
            console.log(data);
            setMovieItems(data.results);
        })
    })

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
        <>
        <div>
            {movieItems.length > 0 ? (
                <div>
                    {movieItems.map((movieRequest)=>
                        <Card key={movieRequest.id} {...movieRequest} /> 
                    )}
                </div>
            ):(
                <h2>No Movies Found</h2>
            )}
        </div>
        </>
    )
}

export default Popular;