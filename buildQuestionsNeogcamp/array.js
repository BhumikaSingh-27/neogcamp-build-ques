//Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
var sum = function (arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
};

console.log(sum([1, 2, 3, 4]));

//Find average of an array and display the output.

var avg = function (arr) {
  let total = sum(arr);
  return total / arr.length;
};

console.log([1, 2, 3, 4]);

//Find maximum and minimum of an array
var findMax = function (arr) {
  // let max=0;
  let max = arr.reduce((max, cur) => {
    if (cur > max) {
      max = cur;
    }
    return max;
  }, 0);
  // for(let ele of arr){
  //     if(ele > max){
  //         max=ele
  //     }
  // }
  return max;
};

var findMin = function (arr) {
  let min = arr[0];
  for (let ele of arr) {
    if (ele < min) {
      min = ele;
    }
  }
  return min;
};

console.log(findMax([1, 5, 3, 8]));
console.log(findMin([1, 5, 3, 8]));

//Find Median and Mode of an array.
// Median : (N+1/2)th term.
// Mode : Most repeating term

// Find sum of two arrays.
// [3,5,2,9,4] = 3+5+2+9+4 = 23
// [6,2,8,1,3] = 6+2+8+1+3 = 20
// Final Output : 20+23 = 43

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
// console.log(sum([1,2,3]))

function calculateSum(arr1, arr2) {
  const sumOne = sum(arr1);
  const sumTwo = sum(arr2);
  return sumOne + sumTwo;
}

console.log(calculateSum([3, 5, 2, 9, 4], [6, 2, 8, 1, 3]));

//Find number of constants and vowels in a string.

function check(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let countVowel = 0;
  let countConso = 0;
  for (let s of str) {
    if (vowels.indexOf(s) !== -1) {
      countVowel++;
    } else {
      countConso++;
    }
  }
  console.log(`constants:${countConso} vowels:${countVowel}`);
}

check("hello");

//Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]

function shiftArray(arr, n) {
  while (n != 0) {
    const eleToShift = arr.pop();
    arr.unshift(eleToShift);
    n--;
  }
  console.log(arr);
}

shiftArray([1, 2, 3, 4, 5], 2);

//Advanced
// Find the sum of two matrix.
// Display transpose of matrix. 
// Find Identity matrix