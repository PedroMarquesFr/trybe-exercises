const assert = require("assert");

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const arraysElements = (accumulator, currentValue) => {
  return accumulator.concat(currentValue);
};

function flatten() {
  return arrays.reduce(arraysElements, []);
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
