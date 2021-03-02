// A diferença de um middleware de erro para um middleware comum é que a assinatura dele recebe quatro parâmetros ao invés de três, ficando assim: function (err, req, res, next) {} .

app.use(middleware1);
app.get('/' /* ... */);
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});
// É importante notar que:
// Middlewares de erro sempre devem vir depois de rotas e outros middlewares ;
// Middlewares de erro sempre devem receber quatro parâmetros .
// Repare que estamos fazendo next(err) na linha 4. Isso diz ao express que ele não deve continuar executando nenhum middleware ou rota que não seja de erro. Ou seja, quando passamos um parâmetro para o next o express entende que é um erro e passa ao próximo middleware que aceita erros, logo tem quatro parâmetro, onde o erro passado é o primeiro parâmetro.
// Esse detalhe é importante, pois se um erro acontece dentro de uma rota ou middleware e nós não o capturamos e o passamos para a função next , os middlewares de erro não serão chamados para tratar aquele erro, o que quer dizer que nossa API ficará sem responder àquela requisição, ou até mesmo que o erro encerrará o processo do Node. Por isso, lembre-se: sempre realize tratamento de erros nas suas rotas e middlewares, passando o erro para a função next , caso necessário.

// Pacote express-rescue
// O pacote express-rescue está disponível no npm e nos ajuda com a tarefa de garantir que os erros sempre sejam tratados. Para utilizá-lo, primeiro faça a instalação usando o comando npm i express-rescue
// Para aprender a usá-lo, vamos pegar um caso de uso fazendo uma rota que recebe uma query param com o nome de um arquivo e usa o método readFile do pacote fs para ler um arquivo e depois retornar o conteúdo do arquivo como resposta da requisição.
const fs = require('fs').promises; // este é um módulo do pacote fs que nos permite usa funções que retornam promises, assim podemos usar ele com async/await como visto abaixo.

app.get('/:fileName', async (req, res) => {
  const file = await fs.readFile(`./${req.params.fileName}`);
  res.send(file.toString('utf-8'));
});
// Para adicionarmos os express-rescue , basta passarmos nossa callback para ele, e passar seu retorno para o express envelopando o middleware da rota com o método rescue, da seguinte forma:
const rescue = require('express-rescue');
// const fs = require('fs').promises;

app.get('/:fileName', rescue(async (req, res) => {
//   const file = await fs.readFile(`./${req.params.fileName}`);
     res.send(file.toString('utf-8'))
}));

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}`})
})
// O que ele faz é simplesmente executar a função de callback dentro de um bloco de try ... catch , fazendo com que qualquer erro não tratado dentro do callback seja passado para a função next . Neste caso, se o arquivo não poder ser lido por qualquer razão que seja ele vai cair no middleware de erro que retorna uma resposta com status 500 e a mensagem de erro da excessão que foi gerada.
// Para ver em execução, veja o código abaixo com o código completo
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs').promises;

const app = express();

app.get('/:fileName', rescue(async (req, res) => {
  const file = await fs.readFile(`./${req.params.fileName}`);
  res.send(file.toString('utf-8'));
}));


app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}`})
})

app.listen(3000);
// Para testar o erro você pode acessar a URL http://localhost:3000/<algum_arquivo> , crie um arquivo no mesmo diretório do código e veja que ele retorna o conteúdo deste arquivo. Ao tentar acessar um arquivo que não existe, vai retornar o json abaixo
// {
//   "error": "Erro: ENOENT: no such file or directory, open './contatos1.json'"
// }
// Através do Express Rescue, você vai conseguir de uma forma centralizar todos os erros da sua aplicação para um único middleware. Isso facilita a construção dos middlewares de rotas, pois você não precisa ficar tratando erros em todos esses middlewares. Se algo der errado em qualquer rota que estiver envelopada pelo método rescue , esse erro vai ser tratado pelo middleware de erros geral, onde você pode devolver um erro genérico.