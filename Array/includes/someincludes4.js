// Problem: Check if any user has
//  one of the roles in ["admin", "moderator"].

const users = [
    { name: "Alice", role: "user" },
    { name: "Bob", role: "moderator" },
    { name: "Charlie", role: "editor" }
];

const roles = ["admin","moderator"]

const checkroles = users.some(user => user.role.includes(roles));

console.log(checkroles);