const obj ={ name: 'Ajay', age: 25, city: 'New Delhi' }

for ( let key in obj ){
    // check index in obj,we get keys
    console.log(key)
    if( obj.hasOwnProperty(key)){
        value = obj[key];
        console.log(key,value)
    }
}