const assert = require("assert");

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

//deepStrictEqual functiona para objetos
//strictEqual para tipos primitivos

// implemente seus testes aqui
//1.Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9, "4 + 5 == 9");

//2.Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0, "0 + 0 == 0");

//3.Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
assert.strictEqual(
  sum(4, "5"),
  9,
  "o erro e mostrado na porpria funcao com um throw"
);
//4.Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
//EH
