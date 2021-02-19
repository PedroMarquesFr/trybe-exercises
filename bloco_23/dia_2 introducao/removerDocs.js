db.inventory.deleteOne({ status: "D" });
db.inventory.deleteMany({ status: "A" });
db.inventory.deleteMany({});
