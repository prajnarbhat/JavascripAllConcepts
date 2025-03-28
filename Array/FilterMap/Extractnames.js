const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true },
    { name: "David", active: false }
];

//  Filter active users and extract their names.

const filterNames = users.filter(item => 
    item.active == true).map(element => element.name);

console.log(filterNames);