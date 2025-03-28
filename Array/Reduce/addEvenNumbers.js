// Sum of Even Numbers Only
// Add only even numbers from an array.

const num = [1,2,3,4,5,6];

const addEven = num.reduce(function(acc,element) {
    return element % 2 === 0 ? acc + element : acc;
},0)

console.log(addEven)