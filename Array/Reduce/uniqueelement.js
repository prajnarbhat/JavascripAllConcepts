const numbers = [1, 2, 3, 4, 2, 3, 5, 1, 6];

// Remove duplicate elements from the array

// if !acc[numbe].includes(item)

const uniqueElements = numbers.reduce((acc,number) => {
    if(!acc[number]){
        acc.push(number)
    }
    return acc;
},[])

console.log(uniqueElements)