import React, { useEffect, useState } from 'react'
import '../app/styles/Banner.css';
import requests from '../Requests';
import axios from '../axios'


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(

                request.data.results[
                    Math.floor(Math.random()  *  request.data.results.length -1)
                ]
            ) 
            return request  
        }
        fetchData();
    }, [])

    function truncate(string, n){
        
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
   
      return <header className="banner" style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center"
      }}>

          <div className="bannerContent">

            <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="bannerbuttons">
            <button className="bannerButton">Play</button>
            <button className="bannerButton" >My List</button>
        </div>
        <h1 className="bannerDescription">{truncate(movie?.overview,150)}</h1>
          </div>
          <div className="bannerFadeBottom"/>
      </header>
    
}

export default Banner
