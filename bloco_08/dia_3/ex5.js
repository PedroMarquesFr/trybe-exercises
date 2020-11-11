const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce(
    (accumulateAs, currentAmountofAs) =>
      (accumulateAs += currentAmountofAs.toUpperCase().split("A").length - 1),
    0
  );
}

assert.deepStrictEqual(containsA(), 20);
