const obj = {"a":1,"b":2}
const obj1 = {"c":3,"d":4};

obj['a'] = 1;

//console.log(obj)

const copyobj = {...obj, "c": 10}

// console.log("Copy of obj:", copyobj)
// console.log(obj)

console.log("Array:", Object.entries(obj));