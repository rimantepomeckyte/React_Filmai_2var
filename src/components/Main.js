import React, {useState, useEffect} from "react";
import MoviesList from "./MoviesList";
import "../App.css";
import Header from "./Header";
import Search from "./Search";
import DetailedMovie from "./DetailedMovie";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [selected, setSelected] = useState({});

    const url = `https://www.omdbapi.com/?apikey=e4db3ced&s=${searchValue}`;//&s= +&{searchValue}
    const getMovies = async () => {
        if(searchValue !== ''){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.Search)
        if (data.Search) {
            setMovies(data.Search);//sukelia duomenis i state tuscia masyva
        }else if(data.Search === undefined){
            setMovies([])
            alert("No movie found!")
            console.log("No movie!")
        }}
    };

    useEffect(() => {
        getMovies();
    }, [searchValue]);//jei tuscias [] krauna tik viena karta kuomet psl uzsikrauna

    const url2 = `https://www.omdbapi.com/?apikey=e4db3ced&i=`;

    const openMovie = async (id) => {//id priskiriamas jau moviesList onClick metodu
        const response = await fetch(url2 + id);
        const data = await response.json();
        console.log(data);
        setSelected(data);//sukelia duomenis i state tuscia objekta
    }

    useEffect(() => {
        openMovie();
    }, []);

    const closeMovie = () => {
        setSelected({})
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center my-4">
                <Header/>
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <MoviesList movies={movies} openMovie={openMovie}/>
            {(typeof selected.Title != "undefined") ? <DetailedMovie selected={selected} closeMovie={closeMovie}/> : false}
        </div>
    )
}

export default Main