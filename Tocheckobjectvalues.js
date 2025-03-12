// To check the values of the objec are equal

// Define the first object
let obj1 = {
    name: "John",
    age: 23,
    degree: "CS"
}

// Define the second object
let obj2 = {
    age: 23,
    degree: "CS"
}

function checkEqual(obj1,obj2){
for ( x in obj1 ){
    if(obj1[x] == obj2[x]){
        return true;
    } 
}
return false;
}
console.log(checkEqual(obj1,obj2));
