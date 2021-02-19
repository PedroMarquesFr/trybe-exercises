//{ campo: { $exists: <boolean> } }
db.inventory.find({ qty: { $exists: true } })
db.inventory.find({ qty: { $exists: true, $nin: [ 5, 15 ] } })
//Essa query seleciona todos os documentos da coleção inventory em que o campo qty existe e seu valor é diferente de 5 e 15 .