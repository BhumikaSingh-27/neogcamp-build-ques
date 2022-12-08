const numberOne = document.querySelector("#input-number-one");
const numberTwo = document.querySelector("#input-number-two");
const output = document.querySelector("#output");
const addBtn = document.querySelector("#btn-addition");
const subtractBtn = document.querySelector("#btn-substraction");
const multiplyBtn = document.querySelector("#btn-multiply");
const divisionBtn = document.querySelector("#btn-divide");

function clickHandler(operator) {
  const one = Number(numberOne.value);
  const two = Number(numberTwo.value);

  if (operator === "+") {
    output.innerText = one + two;
  } else if (operator === "-") {
    output.innerText = one - two;
  } else if (operator === "*") {
    output.innerText = one * two;
  } else {
    output.innerText = one / two;
  }
}

addBtn.addEventListener("click", () => {
  clickHandler("+");
});
subtractBtn.addEventListener("click", () => {
  clickHandler("-");
});
multiplyBtn.addEventListener("click", () => {
  clickHandler("*");
});
divisionBtn.addEventListener("click", () => {
  clickHandler("/");
});
