import React from "react";

const Search = (props) => {
    return (
        <div className="col col-sm-5">
            <input className="search-input form-control"
                   value={props.value}
                   onChange={(e) => props.setSearchValue(e.target.value)}
                   placeholder="Search for a movie..."/>
        </div>
    )
}

export default Search;