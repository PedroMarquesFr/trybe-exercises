let math = require("./fixacao2");

describe("Para fixar", () => {
  it("Faça o mock da funcão subtrair e teste sua chamada.", () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
  it("Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.", () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    expect(math.multiplicar()).toBe(10);
  });
  it("Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.", () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);
    expect(math.somar(3, 3)).toBe(6);
  });
  it("Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.", () => {
    math.dividir = jest
      .fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);
    expect(math.dividir()).toBe(2);
    expect(math.dividir()).toBe(5);
    expect(math.dividir()).toBe(15);
  });
  //   it("Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução", () => {
  //     const mockSubtrair = jest.spyOn(math.subtrair, "somar");
  //     expect(math.multiplicar(3, 3)).toBe(9);
  //   });
});
