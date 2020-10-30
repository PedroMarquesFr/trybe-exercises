const Animals = [
  { name: "Dorminhoco", age: 1, type: "Dog" },
  { name: "Soneca", age: 2, type: "Dog" },
  { name: "Preguiça", age: 5, type: "Cat" },
];

const findAnimalByName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredAnimalByName = Animals.filter(
        (animal) => animal.name === name
      );
      setTimeout(() => {}, 30000);
      resolve(filteredAnimalByName);
    }, 10000);
    reject("Nenhum animal com esse nome!");
  });

const getAnimal = async (name) => {
  const resp = await findAnimalByName(name);
  return resp;
};
// ---------------------

describe("Testando promise - findAnimalByName", () => {
  describe("Quando existe o animal com o nome procurado", () => {
    test("Retorne o objeto do animal", (done) => {
      expect(getAnimal("Dorminhoco")).resolves.toEqual({
        name: "Dorminhoco",
        age: 1,
        type: "Dog",
      });
      done();
    });
  });

  describe("Quando não existe o animal com o nome procurado", () => {
    test("Retorna um erro", () => {
      return getAnimal("Bob").catch((error) =>
        expect(error).toEqual("Nenhum animal com esse nome!")
      );
    });
  });
});
