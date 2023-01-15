//Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
var sum = function(arr){
    let total=0
    for(let  num of arr){
        total+=num
    }
    return total
}

console.log(sum([1,2,3,4]))

//Find average of an array and display the output.

var avg = function(arr){
    let total = sum(arr)
    return (total/arr.length)
}

console.log([1,2,3,4])