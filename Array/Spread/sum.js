
function sum(...number) {
    console.log(number)
    // here we get an array
    return number.reduce((sum,num) => 
         sum += num
    ,0)
    
    
}


console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15));  // Output: 30

