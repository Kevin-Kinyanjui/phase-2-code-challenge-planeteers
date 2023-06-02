import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
    onSearch(search);
  }

  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="What would you like to search for?"
        className="search"
      />
    </div>
  );
}

export default SearchBar;
