const array = [1,2,9,8,7];

// we need 9,8,7
// first create a new array which takes all n max eements
// create a max where every time it will take maximum among rray elements
// filter elements everytime we find an maximum element remove that ang give other elements to iterate
let largestarray = []
function largestElements(array,n) {
    for( let i = 0; i < n; i++){
        console.log(array)
        const max = Math.max(...array)
        largestarray.push(max)
        
        array = array.filter( item => {
            return item !== max;
        })
        
    }
    return largestarray;
}

console.log(largestElements(array,3))