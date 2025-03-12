// array.splice(index from which index we want to removed,no of elements to remove,elements to be added)

let array =  [1,2,3,4]

const removeEle = array.splice(2,1);

// remove from index 0 only 1 elements need to be removed
// output will be removed element

console.log("array.splice gives the result of removed element:",removeEle);
console.log(array)

// array.shift is also used to remove elements from the first
const r = array.shift();
console.log(r)
console.log(array)