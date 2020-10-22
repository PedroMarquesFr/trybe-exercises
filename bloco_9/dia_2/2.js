const randomNumber = () => Math.pow(Math.ceil(Math.random() * 50));
const ARR_SIZE = 10;
const promise = () => {
  return new Promise((resolve, reject) => {
    let array = [];
    for (let aux = 0; aux < ARR_SIZE; aux += 1) {
      array.push(randomNumber());
    }
    console.log(array);
  });
};

promise();
