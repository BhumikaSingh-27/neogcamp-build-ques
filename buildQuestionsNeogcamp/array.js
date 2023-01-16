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
