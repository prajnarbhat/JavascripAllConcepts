const a = [{ name: "Riya" }, { name: "Nisha" }, { name: "Tanisha" }, { name: "Jaya" },
    { name: "Bobby" }, { name: "Alia" },
    ];
//How many times each name occurs
// {'Riya':1},{'Nisha':1}......

const reduceMethod = (a) => {
    return a.reduce((acc,{name}) =>{
    console.log({name})
    acc[name] = 'ajay'
    return acc;
},{});
};



console.log(reduceMethod(a))