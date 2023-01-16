//Write a program that converts the string into uppercase
var convertToUpper = function uppercase(str) {
  return str.toUpperCase();
};
console.log(convertToUpper("niki"));

//Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood.
function changeString(firstStr, secondStr) {
  let words = [firstStr, secondStr];
  let joinWord = words.reverse().join("");
  console.log(joinWord);
}
changeString("morning", "good");

//Program that reads string and count number of characters present in the string
const obj = new Map();

function countChar(str) {
  let count = 0;
  for (let s of str) {
    count = 1;
    if (obj.has(s)) {
      count = obj.get(s);
      obj.set(s, count + 1);
    } else {
      obj.set(s, count);
    }
  }
  console.log(obj);
}
countChar("helloneogrammers");

// a program that converts string like "124" to 124

var ConvertToInt = function (str) {
  return parseInt(str);
};

console.log(ConvertToInt("123"));

//we can also lodash functions to convert
// const _ = require("lodash");
// console.log(_.toInteger("123"))

//a program to delete all vowels from a string. Assume string is not more than 80 characters long
//IN PROGRESS 
var deleteVowels = function (str) {
  const vowel = ["a", "e", "o", "i", "u"];
  const array = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (vowel.indexOf(s[i]) !== -1) {
      console.log(array.splice(i, 1));
    }
  }
};

deleteVowels("hello");
