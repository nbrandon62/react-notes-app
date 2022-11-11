import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBar;
