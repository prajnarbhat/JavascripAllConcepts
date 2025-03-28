// Problem: Given an array of numbers, filter even numbers, 
// calculate their sum, and return it as a formatted strin

const numbers = [10, 15, 20, 25, 30, 35];

const evenNumSum = numbers.filter((number) => (
    number % 2 === 0
)).reduce(function(acc,item){
    acc = acc + item;
    return acc;
},0)

console.log(evenNumSum)