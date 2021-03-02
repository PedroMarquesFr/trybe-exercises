// const fs = require('fs');
// const util = require('util');
// const path = require('path');
// const readline = require('readline');

// const readFile = util.promisify(fs.readFile);

// function question(message) {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   return new Promise((resolve) => {
//     rl.question(message, (answer) => {
//       rl.close();
//       resolve(answer);
//     });
//   });
// }

// question('Informe o caminho do arquivo: ')
//   .then((sourcePath) => {
//     return readFile(path.join(__dirname, sourcePath));
//   })
//   .then((file) => {
//     question('Informe o texto que deseja substituir: ')
//       .then((oldText) => {
//         question('Informe o novo texto: ')
//           .then((newText) => {
//             const newContent = file.toString('utf8').replace(new RegExp(oldText, 'g'), newText);

//             console.log('Novo conteúdo');
//             console.log('-----------------');
//             console.log(newContent);

//             question('Digite o caminho do arquivo de destino: ')
//               .then((destPath) => {
//                 readFile(path.join(__dirname, destPath))
//                   .then((file) => {
//                     question('Deseja realmente sobrescrever o arquivo? (s/n): ')
//                       .then((proceed) => {
//                         if (proceed !== 's') return;

//                         fs.writeFile(path.join(__dirname, destPath), newContent, () => { });

//                         return;
//                       });
//                   })
//                   .catch(() => {
//                     fs.writeFile(path.join(__dirname, destPath), newContent, () => { });
//                   });;
//               });
//           });
//       });
//   })
//   .catch(err => console.log(`Erro ao ler arquivo: ${err.message}`));


const fs = require('fs');
const util = require('util');
const path = require('path');
const readline = require('readline');

const readFile = util.promisify(fs.readFile);

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function start() {
  const sourcePath = await question('Informe o caminho do arquivo: ');

  try {
    const file = await readFile(path.join(__dirname, sourcePath));
    const oldText = await question('Informe o texto que deseja substituir: ');
    const newText = await question('Informe o novo texto: ');

    const newContent = file.toString('utf8').replace(new RegExp(oldText, 'g'), newText);

    console.log('Novo conteúdo');
    console.log('-----------------');
    console.log(newContent);

    const destPath = await question('Digite o caminho do arquivo de destino: ');
    const destFile = await readFile(path.join(__dirname, destPath))
      .then(async (file) => {
        const proceed = await question('Deseja realmente sobrescrever o arquivo? (s/n): ');

        if (proceed !== 's') return;

        fs.writeFile(path.join(__dirname, destPath), newContent, () => { });

        return;
      })
      .catch(() => {
        fs.writeFile(path.join(__dirname, destPath), newContent, () => { });
      });
  } catch (err) {
    console.log(`Erro ao ler arquivo: ${err.message}`);
  }
}

start();