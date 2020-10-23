const randomNumber = () => Math.pow(Math.ceil(Math.random() * 50), 2);
const ARR_SIZE = 10;
const promise = () => {
  return new Promise((resolve, reject) => {
    let array = [];
    for (let aux = 0; aux < ARR_SIZE; aux += 1) {
      array.push(randomNumber());
    }
    const SUM = array.reduce(
      (lastNumber, currNumber) => lastNumber + currNumber
    );
    if (SUM > 8000) {
      reject("É mais de oito mil! Essa promise deve estar quebrada!");
    }
    resolve(SUM);
  })
    .then(
      (number) =>
        `${number}/2 = ${number / 2}\n${number}/3 = ${
          number / 3
        }\n${number}/5 = ${number / 5}\n${number}/7 = ${number / 7}`
    )
    .then((divisors) => console.log(divisors))
    .catch((string) => console.log(string));
};

promise();
