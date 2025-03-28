// Given an array of user objects, 
// filter users whose names include "an".

const users = [
    { name: "Daniel", age: 30 },
    { name: "Anna", age: 25 },
    { name: "John", age: 35 }
];

const filternames = users.filter(user => {
    return user.name.toLowerCase().includes("an")
})

console.log(filternames)