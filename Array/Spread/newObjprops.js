const user = { name: "John", age: 30, country: "USA" };

// age  increased by 5 and new prop profesion added

const user1 = { ...user , age : {...user}.age + 5, profesion : "Developer" };

console.log(user1);