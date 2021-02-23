db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: ["action", "adventure"],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: ["action", "adventure", "sci-fi"],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: ["family", "comedy"],
    imdbRating: 7.4,
  },
]);

//Exercício 1: Adicione a categoria "superhero" ao filme Batman .
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: { category: "superhero" },
  }
);

//Exercício 2: Utilizando o modificador $each , adicione as categorias "villain" e "comic-based" ao filme Batman .
db.movies2.updateOne(
  { title: "Batman" },
  { $push: { category: { $each: ["villain", "comic-based"] } } }
);
//ex3
db.movies2.updateOne({ title: "Batman" }, { $pop: { category: -1 } });

//ex4
db.movies2.updateOne({ title: "Batman" }, { $pull: { category: "action" } });

//ex5
db.movies2.updateOne({ title: "Batman" }, { $pop: { category: 1 } });

//ex6
db.movies2.updateOne(
  { title: "Batman" },
  { $addToSet: { category: "action" } }
);

//ex7
db.movies2.updateMany(
  { $or: [{ title: "Batman" }, { title: "Home Alone" }] },
  { $addToSet: { category: "90's" } }
);
db.movies2.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $addToSet: { category: "90's" } }
);

//ex8
db.movies2.updateOne(
  { title: "Home Alone" },
  {
    $set: {
      cast: [
        {
          actor: "Macaulay Culkin",
          character: "Kevin",
        },
        {
          actor: "Joe Pesci",
          character: "Harry",
        },
        {
          actor: "Daniel Stern",
        },
      ],
    },
  }
);

//ex9
db.movies2.updateOne(
  { "cast.actor": "Daniel Stern" },
  { $set: { "cast.$.character": "Marv" } }
);

//ex10
db.movies2.updateOne(
  { title: "Batman" },
  {
    $set: {
      cast: [
        {
          character: "Batman",
        },
        {
          character: "Alfred",
        },
        {
          character: "Coringa",
        },
      ],
    },
  }
);

//ex11
db.movies2.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  { $push: { "cast.$.actor": ["Christian Bale"] } }
);
db.movies2.updateOne(
  { title: "Batman", "cast.character": "Alfred" },
  { $push: { "cast.$.actor": ["Michael Caine"] } }
);
db.movies2.updateOne(
  { title: "Batman", "cast.character": "Coringa" },
  { $push: { "cast.$.actor": ["Heath Ledger"] } }
);

//ex12
db.movies2.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  {
    $push: {
      "cast.$.actor": {
        $each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
        $sort: 1,
      },
    },
  }
);
