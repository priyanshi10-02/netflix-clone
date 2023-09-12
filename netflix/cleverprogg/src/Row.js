import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./Row.css";
import Youtube from "react-youtube";

import movieTrailer from "movie-trailer";

//const base_url="https://api.themoviedb.org/3"
const image_url="https://image.tmdb.org/t/p/original"

function Row({title,fetchUrl,isLargeRow}) 
{
  
  const [movies,setMovies]=useState([]);
  const [trailerUrl,setTrailerUrl]=useState("");
  useEffect(()=>
  {
    async function fetchData()
    {
      const request= await axios.get(fetchUrl,{
        headers:{
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTc4ZWIzZjQ1NTU1MWI1Y2JlNWVjODQ0Mzc1OTE4YyIsInN1YiI6IjY0ZjJkYTk2ZGJiYjQyMDEzYTIzYzAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SLN9zfCnvYDbfd81xrp8CiLcSRqEB4ClrgqkAto-9RA'
        }
      })
      setMovies(request.data.results);
      // console.log(setMovies);
      return request;
     }
    fetchData();
  },[fetchUrl]);

const opts={
height: "390",
width:"100%",
playerVars:{
  autoplay:1,
},
};


const handleClick = (movie)=>
{
  if(trailerUrl){
    setTrailerUrl('');
  }
  else{
    // movieTrailer(movie?.name||"")
    // .then((url) => {
    //   const urlParams = new URLSearchParams(new URL(url).search);
    //   console.log("url",url)
    //   setTrailerUrl(urlParams.get("v"));
    //   // console.log("helooooooooo",trailerUrl);
    //   // console.log("hello 2",urlParams)

    // }).catch((error)=>console.log(error));
    movieTrailer(movie?.name ,{ tmdbId: movie.id })
                   .then((url)=>{
                     console.log("url is "+url);
                     const urlParams=new URLSearchParams(new URL(url).search);
                     console.log("urlParamsn"+urlParams);
                     setTrailerUrl(urlParams.get("v"));
                   })
                   .catch((error)=> console.log(error));
  }

} 

  // console.log("trailer", trailerUrl);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map(movie=>(

          <img 
          key={movie.id}
          onClick={()=>handleClick(movie)}
          className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          src={`${image_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
           alt={movie.name}/>
        ))}

      </div>
      
       {trailerUrl && <Youtube videoId ={trailerUrl} opts={opts}/> }
      
    </div>
  );
}

export default Row;
