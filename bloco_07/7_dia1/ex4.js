const func1 = (string, parametro) => {
  let newString = string.split("");
  for (let i = 0; i < newString.length; i += 1) {
    if (newString[i] === "x") {
      newString[i] = parametro;
    }
  }
  return newString.join("");
};

const skills = ["html", "js", "css", "java", "python"];

const func2 = (concatArray) => {
  const fu1Return = func1("Tryber x aqui!", "Bebeto");
  const ordened = concatArray.sort();
  return fu1Return + ordened.join(" ");
};

console.log(func1("Tryber x aqui!", "Bebeto"));
console.log(func2(skills));
