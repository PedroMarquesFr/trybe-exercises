const express = require("express");
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get("/", function (req, res) {
  res.send("hello world");
});

/* Rota com caminho '/', utilizando o método POST */
app.post("/", function (req, res) {
  res.send("hello world");
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all("/", function (req, res) {
  res.send("hello world");
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route("/")
  .get(function (req, res) {
    res.send("hello world get");
  })
  .post(function (req, res) {
    res.send("hello world post");
  });

// ...
// Existe também a possibilidade de se passar N callbacks para a mesma rota:
app.get(
  "/ping",
  function (req, res, next) {
    console.log("fiz alguma coisa");
    /* Chama a próxima callback */
    next();
  },
  function (req, res) {
    /* A segunda (e última) callback envia a resposta para o cliente */
    res.send("pong!");
  }
);

// ...

/* :id vira um atributo dentro do objeto params,
   que por sua vez está dentro do objeto req */
app.get("/api/people/:id", function (req, res) {
  res.send(req.params.id);
});

/* Qualquer rota que tem o padrão de terminar com "be".
   Exemplo: trybe, wannabe, letitbe */
app.get(/.*be$/, function (req, res) {
  res.send("/.*be$/");
});

const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  const name = req.query.name;

  res.status(200).json({ message: `Hello, ${name}` });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
