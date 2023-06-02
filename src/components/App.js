import React, { useState } from "react";

import Header from "./Header";
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
      <PlaneteersContainer searchTerm={searchTerm} />
    </div>
  );
}

export default App;
