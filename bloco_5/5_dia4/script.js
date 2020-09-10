document.getElementsByTagName("button")[0].addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  document.getElementById("text").style.color = "white";
});

document
  .getElementsByTagName("input")[0]
  .addEventListener("change", (event) => {
    document.getElementById("text").style.fontSize = event.target.value;
    localStorage.setItem("fontsize", event.target.value);
  });

document
  .getElementsByTagName("input")[1]
  .addEventListener("change", function (event) {
    document.getElementById("text").style.lineHeight = event.target.value;
    localStorage.setItem("fontSpace", event.target.value);
  });

document.getElementsByTagName("button")[1].addEventListener("click", () => {
  document.getElementById("text").classList.add("changeFont");
  localStorage.setItem("fontType", true);
});
