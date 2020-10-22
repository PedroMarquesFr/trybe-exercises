const API_URL = "https://icanhazdadjoke.com/";
const fetchJoke = () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  fetch(API_URL, myObject)
    .then((resp) => resp.json())
    .then(
      (data) => (document.querySelector("#jokeContainer").innerHTML = data.joke)
    );
};

window.onload = () => fetchJoke();
