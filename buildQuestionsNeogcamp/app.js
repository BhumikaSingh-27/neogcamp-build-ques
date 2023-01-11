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
