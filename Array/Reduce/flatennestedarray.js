const array = [[1,2],[3,4],[5,6]];

const newarray = array.reduce(function(acc,element) {
    return acc.concat(element)
},[])

console.log("New array is:", newarray);