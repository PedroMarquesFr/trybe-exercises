const assert = require("assert");
// escreva a função wordLengths aqui
const wordLengths = (arr) => {
  let resp = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== "string")
      throw Error("todos os parametros do  array devem ser string");
    resp.push(arr[i].split("").length);
  }
  return resp;
};

const words = ["sun", "potato", "roundabout", "pizza"];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, "function");
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
