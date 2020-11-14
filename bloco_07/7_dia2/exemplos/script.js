const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
};

student2["Git"] = "Bom";

const listPrint = (student) => {
  for (key in student) {
    console.log(`${key}: ${student[key]}`);
  }
};

console.log("Estudante 1");
listPrint(student1);

console.log("Estudante 1");
listPrint(student2);
