function seiLa(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    if (
      typeof n1 !== "number" ||
      typeof n2 !== "number" ||
      typeof n3 !== "number"
    ) {
      return reject(Error("Digite apenas números"));
    }
    const sum = n1 + n2;
    const mul = sum * n3;
    if (mul < 50) reject(Error("Valor muito baixo"));
    resolve(mul);
  });
}

async function hm() {
  try {
    const resp = await seiLa(10, 20, 1);
    console.log(resp);
  } catch (error) {
    console.log(error.message);
  }
}
hm();
