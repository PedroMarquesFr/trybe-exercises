const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

// const startFile1 = Date.now();
// const resp = fs.readFileSync("./ala.txt");
// const timeFile1 = Date.now() - startFile1;
// console.log(resp, timeFile1);

// const startScript = Date.now();

// const startFile1 = Date.now();
// const file1 = fs.readFileSync('./ala.txt');
// const timeFile1 = Date.now() - startFile1;

// const startFile2 = Date.now();
// const file2 = fs.readFileSync('./ala1.txt');
// const timeFile2 = Date.now() - startFile2;

// const timeScript = Date.now() - startScript;

// console.log(`file1.txt: lidos ${file1.byteLength} bytes em ${timeFile1} milissegundos`);
// console.log(`file2.txt: lidos ${file2.byteLength} bytes em ${timeFile2} milissegundos`);
// console.log(`script concluído em ${timeScript} milissegundos`)

// const startScript = Date.now();

// const startFile1 = Date.now();
// const file1 = fs.readFileSync('./ala.txt');
// const timeFile1 = Date.now() - startFile1;

// const startFile2 = Date.now();
// const file2 = fs.readFileSync('./ala1.txt');
// const timeFile2 = Date.now() - startFile2;

// const timeScript = Date.now() - startScript;

// console.log(`file1.txt: lidos ${file1.byteLength} bytes em ${timeFile1} milissegundos`);
// console.log(`file2.txt: lidos ${file2.byteLength} bytes em ${timeFile2} milissegundos`);
// console.log(`script concluído em ${timeScript} milissegundos`);


// const startScript = Date.now();
// let timeFile1;
// let timeFile2;
// let timeScript;

// function printScriptEnd () {
//   if (timeFile1 && timeFile2) {
//     timeScript = Date.now() - startScript;
//     console.log(`script concluído em ${timeScript} milissegundos`);
//   }
// }

// const startFile1 = Date.now();

// fs.readFile('./ala.txt', (err, file1) => {
//   timeFile1 = Date.now() - startFile1;
//   console.log(`file1.txt: lidos ${file1.byteLength} bytes em ${timeFile1} milissegundos`);
//   printScriptEnd();
// });

// const startFile2 = Date.now();

// fs.readFile('./ala1.txt', (err, file2) => {
//   timeFile2 = Date.now() - startFile2;
//   console.log(`file2.txt: lidos ${file2.byteLength} bytes em ${timeFile2} milissegundos`);
//   printScriptEnd();
// });

// const scriptStart = Date.now();

// const fileNames = fs.readdirSync('../dia3');

// console.log(`encontrados ${fileNames.length} arquivos`);

// let fileSizeTotal = 0;

// for (const fileName of fileNames) {
//   const file = fs.readFileSync(`./${fileName}`);
//   fileSizeTotal += file.byteLength;
// }

// console.log(`tamanho total dos arquivos: ${fileSizeTotal} bytes`);

// const scriptTime = Date.now() - scriptStart;
// console.log(`script concluído em ${scriptTime} milissegundos`);


const scriptStart = Date.now();

fs.readdir('../dia3', (err, fileNames) => {
  console.log(`encontrados ${fileNames.length} arquivos`);
  const fileSizes = [];

  function logEnd() {
    if (fileSizes.length === fileNames.length) {
      const fileLengthSum = fileSizes.reduce((total, size) => total + size);
      const scriptTime = Date.now() - scriptStart;

      console.log(`lidos ${fileLengthSum} bytes em ${scriptTime} milissegundos`)
    }
  }

  fileNames.forEach((fileName) => {
    fs.readFile(`./folder/${fileName}`, (err, file) => {
      fileSizes.push(file.byteLength);
      logEnd();
    });
  });
});