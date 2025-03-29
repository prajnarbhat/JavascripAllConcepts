const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 }
  ];

// modifify age to 45 of john

const user1 = [...users, { name: "John", age: 45 }];
console.log(user1);