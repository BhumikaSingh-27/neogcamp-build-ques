// function which generates a secret code from a given string, by shifting characters of alphabet by N places.
//fromCharCode() - from ascii to letter
//charCodeAt() --convert to ascii

function encodeString(str, n) {
  let secretCode = "";
  for (let i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i) + n;
    // console.log(code)
    secretCode += String.fromCharCode(code);
  }
  console.log(secretCode);
}

encodeString("neogcamp", 2);

//Given a sentence, return a sentence with first letter of all words as capital.

function toSentenceCase(sentence) {
  let words = sentence.split(" ");
  let newArr = [];
  // console.log(words)
  words.map((word) => {
    let arr = word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      arr += word[i];
    }
    newArr.push(arr);
  });
  return newArr.join(" ");
}

const finalSentence = toSentenceCase("we are neoGrammers");
console.log(finalSentence);

//Given an array of numbers, your function should return an array in the ascending order.
//Bubble sort
const data = [23, 14, 56, 6];
function sortArray(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

console.log(sortArray(data));

//Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
function reverseCharactersOfWord(sentence) {
  // return [...sentleence].reduce((x,y)=>y.concat(x))
  let reversedArray = [];
  let arrayOfWords = sentence.split(" ");
  for (let i = 0; i < arrayOfWords.length; i++) {
    reversedArray.push(arrayOfWords[i].split("").reverse().join(""));
  }
  return reversedArray;
}

console.log(reverseCharactersOfWord("we are neoGrammers"));
