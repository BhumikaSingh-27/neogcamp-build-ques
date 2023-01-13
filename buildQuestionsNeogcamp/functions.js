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

function getMaximum(a,b,...rest){
    let max = 0;
    if (a>b){
        max=a
    }else{
        max=b;
    }
    for(let num of rest){
        if (num > max){
            max=num
        }
    }
//instead of for loop, we can use map as well
// rest.map(num=>{
//     if (num>max)
//     max=num
// })

    return max;
}
console.log(getMaximum(9,4,12))


//Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all.

function typeOfTriangle(a,b,c){
    if(a===b && b===c){
        console.log("equilateral Triangle!")
    }else if( a!=b && b!=c){
        console.log("Scalene Triangle!")
    }else{
        console.log("Isosceles Triangle!")
    }
}
typeOfTriangle(30,60,90)
typeOfTriangle(60,60,60)
typeOfTriangle(45,45,90)

//--unction should return the length of the array