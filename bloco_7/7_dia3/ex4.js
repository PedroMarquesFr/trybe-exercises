const assert = require("assert");

function myFizzBuzz(num) {
  if (typeof num !== "number") throw Error("o parametro deve ser um numero");
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

// implemente seus testes aqui
//1.Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(345), "fizzbuzz", "soniflini soniblini");
//2.Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(3), "fizz", "soniflini soniblini");
//3.Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(5), "buzz", "soniflini soniblini");
//4.Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(2), 2, "soniflini soniblini");
//5.Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz("2"), 2, "soniflini soniblini");
