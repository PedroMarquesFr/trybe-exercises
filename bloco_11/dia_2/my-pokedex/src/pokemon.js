import React from "react";
class Pokemon extends React.Component {
  render() {
    return (
      <section className="pokemon">
        <div>
          <p>Nome: {this.props.name}</p>
          <p>Tipo: {this.props.type}</p>
          <p>
            averageWeight:
            {`${this.props.averageWeight.value}: ${this.props.averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={this.props.image} alt="pokemon"></img>
      </section>
    );
  }
}

export default Pokemon;
