const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual arquivo voce quer ler?", (answer) => {
  fs.readFile(answer, "utf8", (err, data) => {
    if (err) {
      console.error(
        `Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`
      );
      process.exit(1);
    }
    console.log(`Conteúdo do arquivo: ${data}`);
  });
});
