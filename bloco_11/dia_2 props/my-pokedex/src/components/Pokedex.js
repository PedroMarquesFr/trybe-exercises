import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex">
        {this.props.pokemons.map(
          ({ name, type, averageWeight, image }, index) => {
            return (
              <Pokemon
                key={index}
                name={name}
                type={type}
                averageWeight={averageWeight}
                image={image}
              />
            );
          }
        )}
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string,
      }),
      image: PropTypes.string,
      moreInfo: PropTypes.string,
    })
  ),
};

export default Pokedex;
