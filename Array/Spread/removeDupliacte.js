const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];


const ar1 = arr1.filter(item => {
    return !arr2.includes(item);
})

const ar2 = arr2.filter(item => {
    return !arr1.includes(item);
})

console.log([...ar1, ...ar2]);