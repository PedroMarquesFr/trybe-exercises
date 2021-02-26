// O operador $all seleciona todos os documentos em que o valor do campo é um array que contenha todos os elementos especificados. Em se tratando-se de array , esse operador é equivalente ao operador $and , pois fará a comparação de todos os valores especificados.
// Utiliza-se $all sempre que é preciso passar mais de um valor de comparação, e é irrelevante tanto a existência de mais elementos no array quanto a ordem em que esses elementos estão.
// Entenda essa diferença com estas duas queries :
// Copiar
db.inventory.find({ tags: ["red", "blank"] });

db.inventory.find({ tags: { $all: ["red", "blank"] } });
// A primeira query retornará somente os documentos em que o array tags seja exatamente igual ao passado como parâmetro no filtro, ou seja, contenha apenas esses dois elementos, na mesma ordem.
// Já a segunda analisará o mesmo array , independentemente da existência de outros valores ou a ordem em que os elementos estejam.
// Utilizar o $all poupa um pouco de código. Veja um exemplo utilizando o $all :
// Copiar
db.inventory.find(
  { tags: { $all: [ "ssl", "security" ] } }
);
// E seu equivalente, utilizando o $and :
// Copiar
db.inventory.find(
  {
    $and: [
      { tags: "ssl" },
      { tags: "security" }
    ]
  }
);