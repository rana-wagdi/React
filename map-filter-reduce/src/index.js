var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const newNumbers= numbers.map(function(x){
//     return x * 2;
    
// })
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumber = numbers.filter(function(num){
//     return num > 10;
// })
// console.log(newNumber);



// hn3mleha l forEach

// var newNumbers = [];
// numbers.forEach(function(num){
//     if (num < 10){
//         newNumbers.push(num)
//     }
//     console.log(newNumbers)
// })

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = 0;
// numbers.forEach(function(currentNumber){
//     newNumber += currentNumber
// })
// console.log(newNumber)

// accumulter m3naha zy ((var new Number =  0))
var newNumber = numbers.reduce(function (accumulater, currentNumber){
    return accumulater + currentNumber
})
console.log(newNumber)

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
