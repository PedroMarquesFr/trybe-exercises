import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      botao1: 0,
      botao2: 0,
      botao3: 0,
    };
  }
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      botao1: estadoAnterior.botao1 + 1,
    }));
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>clica1</button>
        <button onClick={this.handleClick}>clica2</button>
        <button onClick={this.handleClick}>clica3</button>
        <p>{this.state.botao1}</p>
      </div>
    );
  }
}

export default App;
