// Problem: Given an array of names, filter 
// those that contain any letter from ["a", "e", "i", "o", "u"].

const names = ["John", "Paul", "Mike", "Chris", "Bryan"];
const vowels = ["a","e","i","o","u"];

const filterNames = names.filter(name => (
    vowels.some(vowel => name.includes(vowel))

))

console.log(filterNames)