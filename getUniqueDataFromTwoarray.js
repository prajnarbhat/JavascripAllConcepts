const array1 = [1, 2, 3, 4, 5, 7, 9 , 7];
const array2 = [5, 6, 7, 8, 9 , 5];

const set1 = new Set(array1)
const set2 = new Set(array2)

console.log(set1,set2);

let arrayofset1 = [...set1]
let arrayofset2 = [...set2]
// so we have set1 as object that is in form of set
// To get array out of set we use [...set1] wherre we get copy odf set1 in form of array
const filterFromFirstset = arrayofset1.filter(item => {
    return !set2.has(item);
})

const filterFromSet2 = arrayofset2.filter(item =>{
    return !set1.has(item)
})



// filter elements from set1 where that item is not present in set2

console.log("Filtere values:",filterFromFirstset.concat(filterFromSet2))