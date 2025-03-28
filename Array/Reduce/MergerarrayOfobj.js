const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// we want  {"alice":25,"Bob":30,"charlie":35}

const reduceObj = people.reduce((acc,item) => {
    acc[item.name] = item.age;
    return acc;
},{})

console.log(reduceObj)


