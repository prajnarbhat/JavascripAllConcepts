// .indexOf(num) !== index means the number appears again

const numbers = [2, 4, 5, 4, 7, 8];

const findElement = numbers.find((item,index) => 
    numbers.indexOf(item) !== index
)

console.log(findElement)