// O operador $mul multiplica o valor de um campo por um número especificado, persistindo o resultado dessa operação sem a necessidade do operador $set .
// Considere a coleção products com o novo documento descrito abaixo:
// Copiar
db.products.insertOne({
  _id: 1,
  item: "ABC",
  price: NumberDecimal("10.99"),
  qty: 25,
});
// A query abaixo altera esse documento, utilizando o operador $mul para multiplicar os valores dos campos price e qty :
// Copiar
db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
);
// O resultado dessa operação é o documento abaixo, em que o novo valor do campo price é o valor original 10.99 multiplicado por 1.25 , e o valor do campo qty , que originalmente era 25 , é multiplicado por 2 :
// Copiar
// { "_id": 1, "item": "ABC", "price": NumberDecimal("13.7375"), "qty": 50 }
// Você pode utilizar o $mul em um campo que não exista no documento. Nesse caso, o operador criará o campo e atribuirá a ele o valor zero do mesmo tipo numérico do multiplicador .
// Considerando um outro documento na coleção products :
// Copiar
db.products.insertOne({ _id: 2, item: "Unknown" });
// A query abaixo faz um update no documento, aplicando o operador $mul no campo price , que não existe neste documento:
// Copiar
db.products.update({ _id: 2 }, { $mul: { price: NumberLong("100") } });
// Como resultado, temos o campo price criado no documento com valor zero do mesmo tipo numérico do multiplicador. Nesse caso, o tipo é NumberLong :
// Copiar
// { "_id": 2, "item": "Unknown", "price": NumberLong(0) }
// Você também pode multiplicar valores com tipos diferentes. Veja o documento abaixo:
// Copiar
db.products.insertOne({ _id: 3, item: "XYZ", price: NumberLong("10") });
// A query abaixo faz um update , multiplicando o valor do campo price , que é do tipo NumberLong("10") , por NumberInt(5) :
// Copiar
db.products.update({ _id: 3 }, { $mul: { price: NumberInt(5) } });
// E como resultado temos o seguinte:
// Copiar
// { "_id": 3, "item": "XYZ", "price": NumberLong(50) }
