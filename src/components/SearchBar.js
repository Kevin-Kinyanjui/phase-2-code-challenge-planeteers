import React from "react";

function SearchBar({ onSearch }) {
  function handleSearch(event) {
    onSearch(event.target.value);
  }

  return (
    <div className="search">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="What would you like to search for?"
        className="searchTerm"
      />
    </div>
  );
}

export default SearchBar;
