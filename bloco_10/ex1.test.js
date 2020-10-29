const { sum, myRemove, myRemoveWithoutCopy } = require("./ex1.js");
describe("Funcao soma", () => {
  it("Soma de 2+3 igual a 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
  it("Soma de 0+0 igual a 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe("Remove elemento especificado no array", () => {
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

describe("Remove elemento especificado no array sem copia", () => {
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

describe("", () => {});
// it("lanca erro se recebe string como parametro", () => {
//   expect(sum(4, "5")).toThrow(TypeError);
// });
