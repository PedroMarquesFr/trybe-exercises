db.inventory.find({ qty: { $lt: 20 } })
db.inventory.find({ qty: { $lte: 20 } })
db.inventory.find({ qty: { $gt: 20 } })
db.inventory.find({ qty: { $gte: 20 } })
db.inventory.find({ qty: 20 })
db.inventory.find({ qty: { $ne: 20 } })
db.inventory.find({ qty: { $in: [ 5, 15 ] } })
db.inventory.find( { qty: { $nin: [ 5, 15 ] } } )
