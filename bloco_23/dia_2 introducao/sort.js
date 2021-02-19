db.colecao.find().sort({ "campo": "1 ou -1"})
db.example.insertMany([
    { "name": "Mandioquinha Frita", "price": 14 },
    { "name": "Litrão", "price": 8 },
    { "name": "Torresmo", "price": 16 }
])


db.example.find().sort({ "price": 1 }).pretty()
// Resultado esperado:
{
    "_id" : ObjectId("5f7dd0582e2738debae74d6c"),
    "name" : "Litrão",
    "price" : 8
}
{
    "_id" : ObjectId("5f7dd0582e2738debae74d6b"),
    "name" : "Mandioquinha Frita",
    "price" : 14
}
{
    "_id" : ObjectId("5f7dd0582e2738debae74d6d"),
    "name" : "Torresmo",
    "price" : 16
}



db.example.find().sort({ "price": -1 }, { "name" : 1 }).pretty()
// Resultado esperado:
{
    "_id" : ObjectId("5f7dd0582e2738debae74d6d"),
    "name" : "Torresmo",
    "price" : 16
}
{
    "_id" : ObjectId("5f7dd0582e2738debae74d6b"),
    "name" : "Mandioquinha Frita",
    "price" : 14
}
{
    "_id" : ObjectId("5f7dd0582e2738debae74d6c"),
    "name" : "Litrão",
    "price" : 8
}