const API_URL = "https://icanhazdadjoke.com/";
const fetch = require("node-fetch");

const fetchJoke = async () => {
  const resp = await fetch(API_URL, {
    headers: { Accept: "application/json" },
  });
  const jso = await resp.json();
  return jso.joke;
};

module.exports = fetchJoke;
