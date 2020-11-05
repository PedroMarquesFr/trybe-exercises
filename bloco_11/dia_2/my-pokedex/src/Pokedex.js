import React from "react";
import Pokemon from "./pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        {this.props.pokemons.forEach(({ name, type, averageWeight, image }) => {
          <Pokemon
            name={name}
            type={type}
            averageWeight={averageWeight}
            image={image}
          />;
          console.log(name);
        })}
      </div>
    );
  }
}

export default Pokedex;
