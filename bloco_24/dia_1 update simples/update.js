db.inventory.updateOne(
  { item: "paper" },
  { $set: { "size.uom": "cm", status: "P" } }
);

db.inventory.updateMany(
  { qty: { $lt: 50 } },
  { $set: { "size.uom": "in", status: "P" } }
);
