const a = [['name', 'Abhay'], ['age', 30], ['city', 'New Delhi']];

let obj = {};

for ( x in a ){
    console.log(x)
    const [key ,value] = a[x];
    obj[key] = value
}
console.log("Array to obj:",obj);

// Important [kry,value] = a[x]  then obj[key] =value