const words = ["hello", "world", "coding"];

// check all words contain letter e

const letterE = words.every(letter => {
    return letter.toLowerCase().includes("e")
})

console.log(letterE)