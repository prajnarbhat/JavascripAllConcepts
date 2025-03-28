// Filter Even Length Words and Capitalize Them
// Keep words with even length and capitalize them.

const words = ["apple", "banana", "grape", "kiwi", "peach", "melon"];

const wlength = words.filter(item => 
    item.length % 2 === 0
).map(element => element.toUpperCase() );

console.log(wlength);