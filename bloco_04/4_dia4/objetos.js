let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};

console.log(`Bem vinda, ${info.personagem}`);

for (const key in info) {
    console.log(key);
}

/////////////////////////////////////////////////////////

let info2 = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
    valores: {a:"Tio Patinhas", b:"Christmas on Bear Mountain, Dell's Four Color Comics #178", c:"O último MacPatinhas", d:"Sim"}
};

for (const key in info2) {
    console.log(info2[key]);
}