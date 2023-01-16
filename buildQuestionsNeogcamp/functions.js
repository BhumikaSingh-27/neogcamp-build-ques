//function returning power of a of b
function calculatePower(a, b) {
  return Math.pow(a, b);
}
const power = calculatePower(2, 3);
console.log(power);

//function to calculate area of hexagon
function calculateHexagonArea(length) {
  const val = (3 * Math.sqrt(3)) / 2;
  return val * length * length;
}

const area = calculateHexagonArea(10);
console.log(area);

//functions to return the number of words in the sentence
function noOfWords(sentence) {
  let count = 0;
  let wordCount = 1;
  for (let word of sentence) {
    if (word === " ") {
      count++;
      wordCount++;
    }
  }
  return wordCount;
}

const len = noOfWords("Hello, my name is Bhumika");
console.log(len);

//function to return the minimum of them all.
function findMinimum(a, b, ...rest) {
  let min = 0;
  if (a < b) {
    min = a;
  } else {
    min = b;
  }

  for (let num of rest) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

console.log(findMinimum(2, 4));
console.log(findMinimum(3, 5, 9, 1));

//function to return the maximum of them all.

function getMaximum(a, b, ...rest) {
  let max = 0;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  for (let num of rest) {
    if (num > max) {
      max = num;
    }
  }
  //instead of for loop, we can use map as well
  // rest.map(num=>{
  //     if (num>max)
  //     max=num
  // })

  return max;
}
console.log(getMaximum(9, 4, 12));

//Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all.

function typeOfTriangle(a, b, c) {
  if (a === b && b === c) {
    console.log("equilateral Triangle!");
  } else if (a != b && b != c) {
    console.log("Scalene Triangle!");
  } else {
    console.log("Isosceles Triangle!");
  }
}
typeOfTriangle(30, 60, 90);
typeOfTriangle(60, 60, 60);
typeOfTriangle(45, 45, 90);

//--function should return the length of the array

function arrayLength(array) {
  let len = 0;
  for (let i of array) len++;

  return len;
}
console.log(arrayLength([1, 2, 3, 4]));
// function arrayLength(array){
//     return array.length
// }

//--Function to return index, Given an array and an item, your function should return the index at which the item is present.
function indexOf(array, item) {
  for (let index = 0; index < array.length; index++) {
    if (item === array[index]) {
      return index;
    }
  }
}

const index = indexOf([1, 2, 3, 6], 6);
console.log(index);
// console.log([1,2,3,6].indexOf(6))

//--Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
function replace(array, a, b) {
  // for(let i = 0; i<array.length; i++){
  for (let i in array) {
    if (a === array[i]) {
      array[i] = b;
    }
  }
  return array;
}

const arr = [1, 5, 3, 5, 6, 8];
const newArray = replace(arr, 5, 10);
console.log(newArray);

//--function to merege 2 arrays
function mergeArray(arr1, arr2) {
  for (let num of arr2) {
    arr1.push(arr2[num]);
  }
  return arr1;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9];

const mergedArray = mergeArray(arr1, arr2);
console.log(mergedArray);

//function to return the character present at that index in the string for given a string and an index.
function characterAt(str, index) {
  return str[index];
}

const char = characterAt("NeogCamp", 4);
console.log(char);


//Given two dates, your function should return which one comes before the other.

function minDate(dateOne, dateTwo) {
  const firstDate = dateOne.split("/")
  const secondDate = dateTwo.split("/")
  for (let i = 2; i >= 0; i--) {
    if (firstDate[i] !== secondDate[i]) {
      if (firstDate[i] > secondDate[i]) {
        console.log(dateTwo);
        break;
      } else {
        console.log(dateOne)
      }
    }
    else{
      continue;
    }
  }
}
minDate('02/01/2021', '24/01/2021')

