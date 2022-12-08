// inputNumberOne = document.querySelector("#input-number-one");
// inputNumberTwo = document.querySelector("#input-number-two");

// outputResult = document.querySelector("#output");

// btnAddition = document.querySelector("#btn-addition");
// btnSubstraction = document.querySelector("#btn-substraction");
// btnMultiplication = document.querySelector("#btn-multiply");
// btnDivision = document.querySelector("#btn-divide");

// function addHandler() {
//   outputResult.innerText =
//     Number(inputNumberOne.value) + Number(inputNumberTwo.value);
// }

// function substractHandler() {
//   outputResult.innerText =
//     Number(inputNumberOne.value) - Number(inputNumberTwo.value);
// }
// function multiplicationHandler() {
//   outputResult.innerText =
//     Number(inputNumberOne.value) * Number(inputNumberTwo.value);
// }
// function divisionHandler() {
//   outputResult.innerText =
//     Number(inputNumberOne.value) / Number(inputNumberTwo.value);
// }

// btnAddition.addEventListener("click", addHandler);
// btnSubstraction.addEventListener("click", substractHandler);
// btnMultiplication.addEventListener("click", multiplicationHandler);
// btnDivision.addEventListener("click", divisionHandler);

//ques3

inputText = document.querySelector("#input-text");
outputText = document.querySelector("#output");

fontIncrease = document.querySelector("#font-increase");
fontDecrease = document.querySelector("#font-decrease");

function clickHandlerIncreaseFontSize() {
  outputText.innerText = inputText.value;
  console.log(outputText.getComputeStyle);
  console.log("+");
}

function clickHandlerDecreaseFontSize() {
  outputText.style.fontSize -= "2rem";
}
fontIncrease.addEventListener("click", clickHandlerIncreaseFontSize);
fontDecrease.addEventListener("click", clickHandlerDecreaseFontSize);
