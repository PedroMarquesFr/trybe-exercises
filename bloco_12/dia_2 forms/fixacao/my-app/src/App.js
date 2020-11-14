import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: "",
      idade: 0,
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          nome:
          <textarea
            onChange={this.handleChange}
            name="nome"
            value={this.state.name}
            type="text"
          ></textarea>
        </label>
        <label>
          idade:
          <textarea
            onChange={this.handleChange}
            name="idade"
            value={this.state.idade}
            type="number"
          ></textarea>
        </label>
      </form>
    );
  }
}

export default App;
