import React from "react";
import Pokedex from "./components/Pokedex";
import pokemons from "./data/data";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
