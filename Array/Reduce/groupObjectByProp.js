const people = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

// group by id

const reduceById = people.reduce(function(acc,element) {
    //console.log(element)
    acc[element.id] = element
    return acc;
},{})

// op:{
//     1: { id: 1, name: "Alice" },
//     2: { id: 2, name: "Bob" },
//     3: { id: 3, name: "Charlie" }
//   }

console.log(reduceById)