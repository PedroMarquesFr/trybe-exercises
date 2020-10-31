const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz } = require("./ex1.js");
describe("#Funcao soma", () => {
  it("Soma de 2+3 igual a 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
  it("Soma de 0+0 igual a 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe("#Remove elemento especificado no array", () => {
  it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("Verifique se o array passado por parâmetro não sofreu alterações", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("#Remove elemento especificado no array sem copia", () => {
  it("Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("Verifique se o array passado por parâmetro não sofreu alterações", () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado", () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("#FizzBuzz", () => {
  it("Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(345)).toBe("fizzbuzz");
  });
  test("Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });
  it("Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });
  it("Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  // it("Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado", () => {
  //   expect(myFizzBuzz("2")).toBe(2);
  // });
});
// it("lanca erro se recebe string como parametro", () => {
//   expect(sum(4, "5")).toThrow(TypeError);
// });
