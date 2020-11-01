const fetch = require("node-fetch");

const fetchDogApi = async () => {
  const resp = await fetch("https://dog.ceo/api/breeds/image/random");
  const jso = await resp.json();
  return jso;
};

fetchDogApi().then((resp) => console.log(resp));

module.exports = fetchDogApi;
