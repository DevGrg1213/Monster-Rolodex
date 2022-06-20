import React from "react";
import "./Search.css";
const Search = ({ placeholder, searchChange }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={searchChange}
    ></input>
  );
};

export default Search;
