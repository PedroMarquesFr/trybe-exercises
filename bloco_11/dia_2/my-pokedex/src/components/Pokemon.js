import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <section className={`pokemon ${type}`}>
        <div className="pokemon-info">
          <p className="name">{name}</p>
          <p>Tipo: {type}</p>
          <p>
            Weight:
            {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img className="img" src={image} alt="pokemon"></img>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }),
};

Pokemon.defaultProps = {
  pokemons: {
    id: 25,
    name: "Pikachu",
    type: "Electric",
    averageWeight: {
      value: 6.0,
      measurementUnit: "kg",
    },
    image: "https:cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
    moreInfo: "https:bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",
  },
};

export default Pokemon;
