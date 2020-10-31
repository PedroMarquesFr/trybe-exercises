//Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100. A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro. Assim:
let randomNumber = () => Math.ceil(Math.random() * 100);

const isDivisible = (number) => randomNumber() % number === 0;

test("teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible()", () => {
  randomNumber = jest.fn();
  isDivisible(2);
  expect(randomNumber).toHaveBeenCalledTimes(1);
});

test("should return true to a pair number", () => {
  randomNumber = jest.fn().mockReturnValue(2);
  expect(isDivisible(2)).toBe(true);
});

test("Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.", () => {
  randomNumber = jest
    .fn()
    .mockReturnValue(2)
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(4);

  expect(isDivisible(3)).toBe(true);
  expect(isDivisible(4)).toBe(true);
  expect(isDivisible(2)).toBe(true);
  expect(isDivisible(2)).toBe(true);
});

//REQUISITOS DA QUESTAO
// Feito isso, escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible().
// Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true.
// Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado
