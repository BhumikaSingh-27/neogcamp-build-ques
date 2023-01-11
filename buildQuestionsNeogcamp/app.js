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

//a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

function getFibo() {
  let numOne = 0;
  let numTwo = 1;
  let i = 0;
  let sum = 0;
  console.log(numOne);
  console.log(numTwo);
  while (true) {
    sum = numOne + numTwo;
    console.log(sum);
    numOne = numTwo;
    numTwo = sum;
    i++;
  }
}

getFibo();
