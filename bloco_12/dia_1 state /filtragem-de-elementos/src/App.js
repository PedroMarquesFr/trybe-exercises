import React, { Component } from "react";
import "./App.css";
import estados from "./data";

import Input from "./components/Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estadosFiltrados: estados,
    };
  }

  filterState = (e) => {
    this.setState({
      estadosFiltrados: estados.filter((estado) =>
        estado.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <Input onChange={this.filterState}></Input>
        <ul>
          {this.state.estadosFiltrados.map((estado) => (
            <li key={estado}>{estado}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
