//Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100. A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro. Assim:
let randomNumber = () => Math.ceil(Math.random() * 100);

const isDivisible = (number) => randomNumber() % number === 0;
console.log(isDivisible(2));

test("should return true to a pair number", () => {
  randomNumber = jest.fn().mockReturnValue(2);
  expect(isDivisible(4)).toBe(true);
});
