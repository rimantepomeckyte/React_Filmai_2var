import React from "react";

const Search = (props) => {
    const getMoviesOnEnter = (e) => {
        if (e.key === 'Enter') {
            props.setSearchValue(e.target.value);
            //console.log('do validate');
        }
    }

    return (
        <div className="col col-sm-5">
            <input className="search-input form-control"
                   value={props.value}
                   onKeyDown={getMoviesOnEnter}
                   placeholder="Search for a movie..."/>
        </div>
    )
}

export default Search;

