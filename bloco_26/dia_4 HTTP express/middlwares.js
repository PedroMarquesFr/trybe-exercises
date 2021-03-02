const express = require('express');
const app = express();

/* app.use é utilizado para registrar um middleware */
/* Nesse caso, toda vez que um request for recebido, vamos logar o método HTTP e o caminho */
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path}`)
  /* Termina a operação no middleware e chama o próximo middleware ou rota */
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

//

/* Primeiro a ser chamado */
app.use(middleware1);
/* Segundo a ser chamado */
app.use(middleware2);

//

const express = require('express');
const app = express();

const requestTimeMiddleware = function (req, res, next) {
  /* Modificamos o objeto req, adicionando o campo requestTime */
  req.requestTime = Date.now();
  /* Chamamos a próxima função */
  next();
};

/* Registramos nosso middleware */
app.use(requestTimeMiddleware);

app.get('/', function (req, res) {
  const responseText = `Request feito às ${req.requestTime}`;
  res.send(responseText);
});

app.listen(3000);

//

// simpsons.js
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/homer', function (req, res) {
  res.send('Hello Homer!');
});

module.exports = router;

// index.js
const express = require('express');
const simpsons = require('./simpsons');

const app = express();

/* Todas as rotas com /simpsons/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/simpsons', simpsons);

app.listen(3000);

//

//middware em nivel em niveis , com escopo


