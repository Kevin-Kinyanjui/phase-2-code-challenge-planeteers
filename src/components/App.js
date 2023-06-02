import React, { useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(searchText) {
    setSearchTerm(searchText);
  }

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <RandomButton />
      <PlaneteersContainer searchTerm={searchTerm} />
    </div>
  );
}

export default App;
