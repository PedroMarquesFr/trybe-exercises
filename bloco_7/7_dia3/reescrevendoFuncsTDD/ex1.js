const assert = require("assert");

const greetPeople = (people) => {
  let greeting = "Hello ";
  let newPeopleGreet = [];

  for (const person in people) {
    newPeopleGreet.push(greeting + people[person]);
  }
  return newPeopleGreet;
};

const parameter = ["Irina", "Ashleigh", "Elsa"];
const result = ["Hello Irina", "Hello Ashleigh", "Hello Elsa"];

assert.deepStrictEqual(greetPeople(parameter), result);
