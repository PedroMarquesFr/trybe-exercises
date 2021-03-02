const readline = require("readline-sync");
const inquirer = require("inquirer");

function calculaImc() {
  inquirer
    .prompt([
      {
        name: "peso",
        message: "Qual o seu peso (kg)?",
        type: "input",
      },
      {
        name: "altura",
        message: "Qual o sua altura (m)?",
        type: "input",
      },
    ])
    .then(({ peso, altura }) => {
      const imc = (parseFloat(peso) / Math.pow(parseFloat(altura), 2)).toFixed(
        2
      );

      if (imc < 18.5) {
        return console.log("Abaixo do peso", imc);
      }
      if (imc < 24.9) {
        return console.log("Peso normal", imc);
      }
      if (imc < 29.9) {
        return console.log("Acima do peso (sobrepeso)", imc);
      }
      if (imc < 34.9) {
        return console.log("Obesidade grau I", imc);
      }
      if (imc < 39.9) {
        return console.log("Obesidade grau II", imc);
      }

      return console.log("Obesidade graus III e IV", imc);
    });
}

calculaImc();
