const a1 = ['name', 'age', 'city'];
const a2 = ['Ajay', 25, 'New Delhi'];

// op: {name:'Ajay',age:25,city:"newdelhu"}
let obj={};

a1.forEach((item,index) =>{
    console.log(item,index);
    if ( index in a2 ){
        const key = item;
        const value = a2[index]
        obj[key] = value;
    }
})
console.log("Object:",obj);