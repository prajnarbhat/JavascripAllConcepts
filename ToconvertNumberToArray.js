let num = 234456;

// we want op as [2,3,4,4,5,6]
// Array.from is used to convert object to array
// store num in variable that is let num=234456
// convert into string

let stringOfNum = String(num);
console.log(stringOfNum);

// Then add a func to convert to number
let fun = (num) => Number(num);

console.log(fun(stringOfNum))

// here stringOfNum is a firest parameer as all the string values are accepted inside fun and convert to number
// at last by array.from we get array of all the number
const getArray = Array.from(stringOfNum,fun)

console.log(getArray)

// Array.from(String values of num,iterating through all string values to get in number form)