import React,{useEffect} from 'react'
import MovieListing from "../MovieListing/MovieListing";
import MovieAPI from '../../common/APIS/MovieAPI';
import {APIKey} from '../../common/APIS/MovieAPIKey'
const Home=()=> {

 useEffect(() => {
     const movieText ="Harry";
     const fetchMovies = async ()=>{
         const response = await MovieAPI.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
         .catch((err)=>{
            console.error(err);
         });
         console.log(response.data);
     }
    fetchMovies();
 }, [])
    return (
        <div>
        <div className="banner-img"></div>
        <MovieListing />
      </div>
    )
}

export default Home
