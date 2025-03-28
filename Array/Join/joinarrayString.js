// Convert an Array of Names to a String
// Problem: Given an array of names, filter out names shorter than 4 letters, capitalize the rest, and join them into a sentence.

const names = ["alice", "bob", "charlie", "dan", "edward"];

const filternames = names.filter((name) => (
    name.length > 4
)).map((item) => (
    item.toUpperCase()
)).join()

console.log(filternames)