import React from "react";

const Search = (props) => {
    const getMoviesOnEnter = (e) => {
        if (e.key === 'Enter') {
            props.setSearchValue(e.target.value);
        }
    }
    const handleSubmit= (e)=> {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div className="col col-sm-5">
            <form onSubmit={handleSubmit}>
            <input className="form-control"
                   value={props.value}
                   onKeyDown={getMoviesOnEnter}
                   placeholder="Search for a movie..."/>
            </form>
        </div>
    )
}

export default Search;

