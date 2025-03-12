const exampleObject = {
    key1: 'Geeks',
    key2: 100,
    key3: 'Javascript'
};

const getKeyfromvalue = Object.keys(exampleObject).find(key =>{
    return exampleObject[key] == 100
})

console.log(getKeyfromvalue)
