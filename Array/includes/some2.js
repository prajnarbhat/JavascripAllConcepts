// Problem: Given an array of numbers, 
// check if at least one number is greater than 100.

const numbers = [10, 50, 99, 101, 30];

const numgreatThanhundred = numbers.some(num => num > 100);

console.log(numgreatThanhundred)