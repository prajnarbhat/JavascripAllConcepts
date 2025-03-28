// get the longest word in the array

const words = ["apple", "banana", "grapefruit", "kiwi"];

const longestWord = words.reduce(
    function(acc,element,index) {
        return acc.length > element.length ? acc : element 
    }
)

console.log(longestWord)