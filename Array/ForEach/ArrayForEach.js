 // array.forEach(function(parameters))
 // Parameters are element,index,array
 // Function inside the forEach will be an arrow function

const ar1 = [1,2,3,4];

// const forEacha1 = ar1.forEach((element, index, ar1) => {
//     console.log('a['+index+'] =' + element);
// })

let sum = 0;
const sumofelement = ar1.forEach((element) => {
    return sum += element;
})
console.log(sum);


