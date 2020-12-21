import React from "react";

const DetailedMovie = ({selected, closeMovie}) => {
    return (
        <div className="detailed-movie container-fluid">
            <h2 className="row text-white w-25 ml-3 mt-3">{selected.Title}<span className="font-weight-normal text-dark"> ({selected.Year})</span>
            </h2>
            <p className="row w-25 d-flex justify-content-start text-dark font-weight-bolder ml-3">Imdb
                rating: {selected.imdbRating}</p>
            <div className="row mt-3 ml-3">
                <img src={selected.Poster} className="detailed-img" alt=""/>
                <div className="ml-3 col-md-7 col-12">
                    <p className="row text-white font-weight-bolder plot mb-5">{selected.Plot}</p>
                    <p className="row text-white"><span
                        className="font-weight-bold text-dark">Genre: </span> {selected.Genre}</p>
                    <p className="row text-white"><span
                        className="font-weight-bold text-dark">Director: </span> {selected.Director}</p>
                    <p className="row text-white"><span
                        className="font-weight-bold text-dark">Main actors: </span> {selected.Actors}</p>
                </div>
            </div>
            <div className="row d-flex justify-content-start ml-5 pl-4">
                <button className="text-white my-3 btn btn-info btn-lg" onClick={closeMovie}>Go back</button>
            </div>
        </div>
    )
}

export default DetailedMovie;