//program to find factorial of the number

var readlineSync = require("readline-sync");
let userInput = readlineSync.question("enter a number\n");

if (userInput >= 0) {
  let fact = 1;
  for (let num = userInput; num >= 1; num--) {
    fact = fact * num;
  }
  console.log(`Factorial of ${userInput} : ${fact}`);
} else {
  console.log("Please enter positive number\n");
}

//program to check a number is prime or not
var readlineSync = require("readline-sync");
let userInput = readlineSync.question("enter a number\n");

function checkPrime(number) {
  let flag = 0;
  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      flag = 1;
    }
  }
  if (flag === 1) {
    console.log("Not Prime Number!");
  } else {
    console.log("Prime Number!");
  }
}

checkPrime(userInput);
