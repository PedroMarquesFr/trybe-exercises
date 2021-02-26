// O operador $size seleciona documentos em que um array contenha um número de elementos especificado.
// Considere a coleção products a seguir, contendo documentos em que o campo tags pode ser um array :
// Copiar
// { _id: 1, tags: ["red", "green"] },
// { _id: 2, tags: ["apple", "lime"] },
// { _id: 3, tags: "fruit" },
// { _id: 4, tags: ["orange", "lemon", "grapefruit"] }
// Ao executar a query abaixo, apenas os documentos com o _id igual 1 e 2 serão retornados, pois seus campos tags são arrays e contêm exatamente 2 elementos :
// Copiar
db.products.find(
  { tags: { $size: 2 } }
);
// É importante saber que o operador $size não aceita ranges de valores. Se você precisar selecionar documentos com base em valores diferentes, a solução é criar um campo que se incremente quando elementos forem adicionados ao array .