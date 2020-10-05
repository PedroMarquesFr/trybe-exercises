const assert = require("assert");
// escreva a função addAllnumbers aqui

const addAllnumbers = function (array) {
  let sun = 0;
  for (let i = 0; i < array.length; i++) {
    sun += array[i];
  }
  return sun;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, "function");
assert.strictEqual(output, expected);
