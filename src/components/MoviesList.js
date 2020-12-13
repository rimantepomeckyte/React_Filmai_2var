import React from "react";
import "../App.css";
import logo from '../img/logo.png';

const MoviesList = ({ movies, openMovie }) => {
    return (
        <div className="moviesList">
            {movies.map(movie => <div key={movie.imdbID} onClick={() => openMovie(movie.imdbID)} className="image-container d-flex justify-content-start ml-4 mb-4">
                {(movie.Poster === "N/A") ? <img src={logo} alt=""/> : <img src={movie.Poster} alt=""/> }
                <h4 className="text-white text-center mt-1 bg-success">{movie.Title}</h4>
            </div>)}
        </div>
    )
}

export default MoviesList;


