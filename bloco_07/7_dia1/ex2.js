const longestWord = (frase) => {
  const array = frase.split(" ");
  let biggest = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > biggest) {
      biggest = array[i].length;
    }
  }
  return array[biggest];
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
); // retorna 'aconteceu'
