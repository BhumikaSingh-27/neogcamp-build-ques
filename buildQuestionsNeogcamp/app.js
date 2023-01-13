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

//program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
var readlineSync = require("readline-sync");
const day = readlineSync.question("enter the day\n")

const daysInWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

function checkWeek(day){

    for( let i = 0 ; i<daysInWeek.length ;i++){
      
        if ((day.toLowerCase) === daysInWeek[i].toLowerCase){
          var index =daysInWeek.indexOf(day)
        //   console.log(index)
            if ( index ===0 || index === 6){
                console.log(`${day} is a weekend`);
              break;
            }else{
                console.log(`${day} is a weekday`)
              break;
            }
        }
      else{
        continue
      }
    }
}

checkWeek(day)