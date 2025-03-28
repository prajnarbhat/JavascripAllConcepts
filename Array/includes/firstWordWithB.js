// Problem: Find the first word in an array that contains "b".

const words = ["apple", "cherby", "banana", "gbape"];

const firstWordJs = words.find(
    word => (
        word.toLowerCase().includes("b")
    )
)

console.log(firstWordJs)