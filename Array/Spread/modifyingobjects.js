const person = { 
    name: "Alice", 
    address: { city: "New York", zip: 10001 } 
  };

const p1 = {...person.address, city: "Los Angeles"};

console.log({...person,address: p1})

console.log(person)