import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { Monster } from "./types";

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState<string>("");
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div>
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder="Search monsters..."
        setSearchField={setSearchField}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
