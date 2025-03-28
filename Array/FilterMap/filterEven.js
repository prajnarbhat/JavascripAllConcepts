// Filter out even numbers and double the odd numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterNumbers = numbers.filter(item => 
    item % 2 !== 0).map(element => element + element);

console.log(filterNumbers);