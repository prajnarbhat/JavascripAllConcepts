/// array.slice will remove the elements from specified indexes
// It will not change the original array by removing elements

// array.spice alos used to remove add elements from spectified index
// It will change the original array

let array = [1,2,3,4,5]

const arraySplice = array.slice(0,2);
const arraysplice = array.splice(1,2);

console.log("Original array:",array);
console.log("Spliced array:",arraySplice);
console.log("Removing 2 elements from index 1:",arraysplice);