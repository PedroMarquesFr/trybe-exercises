//1
document.querySelector("#elementoOndeVoceEsta");

//2
document.querySelector(
  "#elementoOndeVoceEsta"
).parentNode.style.backgroundColor = "red";

//3
document.querySelector("#primeiroFilhoDoFilho").innerHTML = "added text";

//4
console.log(document.querySelector("#pai").childNodes[1]);

//5
console.log(
  document.querySelector("#elementoOndeVoceEsta").previousElementSibling
);

//6
console.log(
  document.querySelector("#elementoOndeVoceEsta").parentNode.innerText
);

//7
console.log(document.querySelector("#elementoOndeVoceEsta").nextElementSibling);

//80
console.log(document.querySelector("#pai").childNodes[5]);
