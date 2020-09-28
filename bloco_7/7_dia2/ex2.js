const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//ex1
lesson2.turno = "manha";
console.log(lesson2);

//ex2
const ex2 = Object.keys(lesson2);
console.log(ex2);
function listkeys(obj) {
  for (const key in obj) {
    console.log("------");
    console.log(key);
  }
}
listkeys(lesson3);

const objectLength = (obj) => {
  const seila = Object.keys(obj);
  console.log(seila.length);
};
objectLength(lesson1);

const objectValues = function (obj) {
  for (const key in obj) {
    console.log("------");
    console.log(obj[key]);
  }
};
objectValues(lesson2);

//5
const allLessons = { lesson1: {}, lesson2: {}, lesson3: {} };
Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);
console.log(allLessons);

//6
const numStudents = (obj) => {
  let sun = 0;
  for (const key in obj) {
    sun += obj[key]["numeroEstudantes"];
  }
  console.log(sun);
};
numStudents(allLessons);

//7
const getValueByNumber = (obj, position) => {
  const array = Object.values(obj);
  console.log(array[position]);
};
getValueByNumber(lesson1, 0);

//8
const verifyPair = (obj, key, value) => {
  if (obj[key] === value) {
    return true;
  }
  return false;
};
console.log(verifyPair(lesson3, "materia", "Maria Clara"));
console.log(verifyPair(lesson3, "turno", "noite"));
//ex3
