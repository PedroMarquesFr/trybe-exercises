function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  i = "function scope";
  console.log("Function scope i is: ", i);
  return i;
}

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // Only change code below this line

  s.unshift(2);
  s.pop();
  return s;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
