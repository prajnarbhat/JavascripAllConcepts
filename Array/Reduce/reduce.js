// array.reduce takes a call back function that iterates over every element of the array and returns a single value
// array.reduce(callbackfunc,initialvalue)

// always use return statment
// always give the initial value or else it eill take the first element of the array

// white iterating does not modifity the original array 
// create a copy of array

const num = [1,2,3,4,5]

const sumofvalues = num.reduce(function(acc,element,index,array) {
    return acc + element;
},0);

console.log("Sum of values:", sumofvalues);