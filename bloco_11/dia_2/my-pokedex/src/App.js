import React from "react";
import Pokedex from "./Pokedex";
import pokemons from "./data";

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={pokemons} />
      <p>asdas</p>
    </div>
  );
}

export default App;
