const display = document.querySelector(".display");
const equalButton = document.querySelector(".equal-button");
const mathOpButtons = document.querySelectorAll(".math-op-button");
const numButtons = document.querySelectorAll(".num-button");
const dotButton = document.querySelector(".dot-button");
const cButton = document.querySelector(".c-button");
const ceButton = document.querySelector(".ce-button");

let number = "";
let equation = "";

cButton.addEventListener("click", () => {
  number = "";
  equation = "";
  display.innerHTML = 0;
});

ceButton.addEventListener("click", () => {
  number = "";
});

numButtons.forEach(button =>
  button.addEventListener("click", e => {
    number += e.target.innerHTML;
    display.innerHTML = number;
  })
);

dotButton.addEventListener("click", e => {
  if (number.slice(-1) !== ".") {
    number += e.target.innerHTML;
    display.innerHTML = number;
  }
});

mathOpButtons.forEach(button =>
  button.addEventListener("click", e => {
    if (number !== "") {
      if (isNaN(equation.slice(-1))) {
        const equal = eval(equation + number);
        equation = equal + e.target.innerHTML;
        display.innerHTML = equal;
      } else {
        equation += number + e.target.innerHTML;
      }
      number = "";
    }
  })
);

equalButton.addEventListener("click", () => {
  const equal = eval(equation + number);
  equation = "";
  display.innerHTML = equal;
  number = equal;
});
