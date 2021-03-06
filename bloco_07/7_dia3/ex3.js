const assert = require("assert");

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
//1.Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], "erro");

//2.Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(
  myRemoveWithoutCopy([1, 2, 3, 4], 3),
  [1, 2, 3, 4],
  "nao retorna pois [1, 2, 3, 4] nao eh o resultado"
);
//3.Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// assert.deepStrictEqual(
//   myRemoveWithoutCopy([1, 2, 3, 4], 3),
//   [1, 2, 3, 4],
//   "erro, se tiver alterado"
// );
//4.Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado\
assert.deepStrictEqual(
  myRemoveWithoutCopy([1, 2, 3, 4], 5),
  [1, 2, 3, 4],
  "erro:funcao com problema"
);
