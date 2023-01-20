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

//program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45
//inprogress..
var isAlphaNumberic = function (str) {
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt();
    if (typeof str === "String") {
      if (code >= 48 || code <= 57) {
        console.log("string is alphanumberic");
      } else {
        console.log("not alpha numberic");
      }
    }
  }
};

console.log(isAlphaNumberic("batman@23"));

//  A program that reads three strings and prints the longest and smallest one

function checkStrLength(str1, str2, str3) {
  if (str1.length > str2.length) {
    if (str1.length > str3.length) {
      console.log(str1);
      console.log(str2.length < str3.length ? str2 : str3);
    } else {
      console.log(str3);
    }
  } else {
    if (str2.length > str3.length) {
      console.log(str2);
      console.log(str1.length < str3.length ? str1 : str3);
    } else {
      console.log(str3);
    }
  }
}

var stringOne = "Hello";
var stringTwo = "Goodmorning";
var stringThree = "Even";

checkStrLength(stringOne, stringTwo, stringThree);

//A program that counts number of vowels and consonants in a String
const vowels = ["a", "e", "o", "i", "u"]
const countLetters = new Object();
function countVowelsAndConsonants(str){
    let countC=0;
    let countV=0;
    let array = str.split("")
    for(i=0;i<str.length;i++){
        if(vowels.indexOf(str[i]) !== -1){
            countV++;

        }else{
            countC++;
    }
        
console.log(`vowels:${countV} consonants:${countC}`)
}
countVowelsAndConsonants("Helloo")

//Write a program that takes two strings and copies smaller string into bigger string
function functioncoptStr(str1,str2){
    let newStr="";
    if(str1.length>str2.length){
        newStr=str2+str1
        // console.log(str1)
    }else{
        newStr=str1+str2
    }
    return newStr
}

const stringCopied = functioncoptStr("hello","bhumika");
console.log(stringCopied)