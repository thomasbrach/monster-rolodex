import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ setSearchField, placeholder }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={(event) => setSearchField(event.target.value)}
    />
  );
};

export default SearchBox;
