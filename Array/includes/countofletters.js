// Problem: Count how many words in an array contain the letter "e".

const words = ["apple", "banana", "cherry", "date", "grape"];

wordOfE = words.filter(item => {
    return item.includes("e");
})

console.log("Words with e:", wordOfE.length);