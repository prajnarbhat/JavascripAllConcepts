let arrayObj = [{
    prop_1: 'val',
    prop_2: 'val_12',
    prop_3: 'val_13'
}, {
    prop_1: 'val',
    prop_2: 'val_22',
    prop_3: 'val_23'
}];

// find the indexOf object with value value_23

const index = arrayObj.findIndex(object =>{
    console.log(object)
    return object.prop_3 === 'val_23';
})

console.log(index);