// Exercício 3 : Faça um script que, a cada intervalo de segundo, mostre no console a memória utilizada do sistema operacional vs a memória total (ambos em megabytes ).

const os = require("os");

setInterval(function () {
  console.log(
    `Uso de memoria: ${os.totalmem() / 1024 / 1024}/${
      (os.totalmem() - os.freemem()) / 1024 / 1024
    } MB`
  );
}, 1000);
