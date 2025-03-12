const a1 = ['name', 'age', 'city'];
const a2 = ['Ajay', 25, 'New Delhi'];

const res = {};

a1.forEach((item,index) =>{
    res[item] = a2[index]
    console.log(res)
})
