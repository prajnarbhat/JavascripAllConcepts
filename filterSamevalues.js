let a1 = [1, 2, 3, 4, 5, 77, 876, 453];
let a2 = [1, 2, 45, 4, 231, 453];

const filterSameValues = a1.filter(item =>{
    return a2.includes(item);
})

console.log("Filter all repeated values:",filterSameValues);