const assert = require("assert");
// escreva a função findTheNeedle aqui

function findTheNeedle(arr, word) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === word) {
      return i;
    }
  }
  throw Error("Palavra nao encontrada no Array");
}

let words = ["house", "train", "slide", "needle", "book"];
let expected = 3;

let output = findTheNeedle(words, "needle");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = 0;
output = findTheNeedle(words, "plant");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = -1;
output = findTheNeedle(words, "plat");
assert.strictEqual(output, expected);
