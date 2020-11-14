import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
    };
  }
  render() {
    return (
      <forms>
        <label>
          Nome:
          <input name="nome" type="text" maxlength="40"></input>
        </label>
        <label>
          Email:
          <input name="email" type="email" maxlength="50"></input>
        </label>
        <label>
          a CPF:
          <input name="cpf" maxlength="11"></input>
        </label>
        <label>
          Endereco:
          <input name="endereco" maxlength="200"></input>
        </label>
        <label>
          Cidade:
          <input name="cidade" maxlength="28"></input>
        </label>
        <label>
          Estados:
          <select name="estado">
            <option>ce</option>
            <option>ba</option>
          </select>
        </label>
        <label>Tipo:</label>
      </forms>
    );
  }
}

export default App;
