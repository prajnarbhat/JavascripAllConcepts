// Problem: Given an array of users, 
// check if any user has the role "admin".

const users = [
    { name: "Alice", role: "user" },
    { name: "Bob", role: "admin" },
    { name: "Charlie", role: "editor" }
];

const userRoleadmin = users.some( user => user.role.includes("admin"))

console.log(userRoleadmin)