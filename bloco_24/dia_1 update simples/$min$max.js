Aqui temos dois operadores que também são bastante interessantes. Ambos fazem o mesmo tipo de comparação antes de executar a operação, porém em "sentidos" diferentes:
$min altera o valor do campo para o valor especificado se esse valor especificado é menor do que o atual valor do campo;
$max faz o mesmo, porém altera o valor do campo se o valor especificado é maior do que o atual valor do campo.
Ambos podem comparar valores de diferentes tipos, utilizando sempre a ordem de comparação BSON.
Vamos ver alguns exemplos para ficar mais claro, utilizando o seguinte documento na coleção scores :
Copiar
use conteudo_trybe;
db.scores.insertOne(
  { _id: 1, highScore: 800, lowScore: 200 }
);
Exemplo 1: Comparando números
No documento de exemplo, o valor atual do campo lowscore é 200 . A operação abaixo utiliza o $min para comparar 200 com o valor especificado 150 e altera o valor do campo lowscore para 150 porque 150 é menor do que 200 :
Copiar
db.scores.update({ _id: 1 }, { $min: { lowScore: 150 } });
Agora o documento modificado na coleção scores ficou assim:
Copiar
{ _id: 1, highScore: 800, lowScore: 150 }
Se você executar a operação abaixo, ela não terá efeito no documento porque o valor do campo lowscore é menor do que 250 , e o documento não será alterado:
Copiar
db.scores.update({ _id: 1 }, { $min: { lowScore: 250 } })
Atualmente, o campo highscore tem o valor 800 . A operação abaixo usa o $max para comparar 800 e o valor especificado 950 , e então altera o valor do campo highscore para 950 porque 950 é maior que 800 :
Copiar
db.scores.update({ _id: 1 }, { $max: { highScore: 950 } });
E o documento agora fica assim:
Copiar
{ _id: 1, highScore: 950, lowScore: 150 }
Assim como no exemplo utilizando o operador $min , a operação abaixo também não afetará em nada o documento porque o valor de highscore é maior do que 870 :
Copiar
db.scores.update({ _id: 1 }, { $max: { highScore: 870 } });
Exemplo 2: Comparando datas
Você pode utilizar os operadores $min e $max para comparar valores do tipo Date .
Considere o seguinte documento da coleção tags :
Copiar
use conteudo_trybe;
db.tags.insertOne(
  {
    _id: 1,
    desc: "crafts",
    dateEntered: ISODate("2019-10-01T05:00:00Z"),
    dateExpired: ISODate("2019-10-01T16:38:16Z")
  }
);
A operação abaixo utiliza o operador $min para comparar o valor do campo dateEntered e altera seu valor porque 25/09/2019 é uma data menor (anterior) do que o valor atual, ao mesmo tempo em que o operador $max também é usado para comparar o valor do campo dateExpired e altera esse valor porque 02/10/2019 é uma data maior (posterior) do que o valor atual:
Copiar
db.tags.update(
  { _id: 1 },
  {
    $min: { dateEntered: new Date("2019-09-25") },
    $max: { dateExpired: new Date("2019-10-02") }
  }
);