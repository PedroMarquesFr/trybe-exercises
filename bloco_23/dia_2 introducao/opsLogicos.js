//{ campo: { $not: { <operador ou expressão> } } }
db.inventory.find({ price: { $not: { $gt: 1.99 } } });
db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] });

//{ $nor: [ { <expressão1> }, { <expressão2> }, ...  { <expressãoN> } ] }
db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] });

//{ $and: [{ <expressão1> }, { <expressão2> } , ... , { <expressãoN> }] }
db.inventory.find({
  and: [{ price: { $ne: 1.99 } }, { price: { $exists: true } }],
});

db.inventory.find({
  and: [
    {
      or: [{ price: { $gt: 0.99, $lt: 1.99 } }],
    },
    {
      or: [{ sale: true }, { qty: { $lt: 20 } }],
    },
  ],
});
