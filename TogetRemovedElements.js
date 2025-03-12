// To get removed elements

let array = [1,2,3,4,5,6]

// remove 1,2,3 op should be this aarray

const arrayOfRemovedElements = array.filter((item,index) => {
    return index <= 3;
});

console.log(arrayOfRemovedElements)