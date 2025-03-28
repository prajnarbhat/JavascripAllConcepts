 // Problem: Given an array of words, 
 // return only the words that contain the letter "a".

 const words = ["apple", "banana", "cherry", "date", "fig"];

let wordWithA = words.filter(letter => {
    return letter.includes("a");
})

console.log("Word with a:", wordWithA);

