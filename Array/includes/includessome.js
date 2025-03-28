//Problem: Given an array of words, 
// check if any word contains the letter "z".

const words = ["hello", "world", "amazing", "superb"];

const wordsWithZ = words.some(word => word.includes("z"));

console.log(wordsWithZ)
