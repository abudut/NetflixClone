import React, { useState, useEffect } from "react";
import "../app/styles/Row.css";
import axios from "../axios";

function Row({title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    // if [], run once when the row loads, and don't run it again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  return (
    <div className="row">
      <h2 className="rowTitle">{title}</h2>

<div className="rowPosters">
        {movies.map(
          (movie) =>
         ((isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path)) && (
          <img
   
            className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
          
          )
        )}
      </div>
    </div>
  );
}

export default Row;
