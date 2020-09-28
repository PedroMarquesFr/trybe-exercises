let counter = 0;
document.querySelector(".clicks").addEventListener("click", () => {
  counter += 1;
  document.querySelector(".output").innerHTML = counter;
});
