//Problem: Given an array, remove duplicate elements.

const arr = ["apple", "banana", "apple", "orange"];

const uniqueElement = arr.filter((item,index) => {
    return arr.indexOf(item) == index
})

console.log(uniqueElement)