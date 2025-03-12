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

const indexOfElement = arrayObj.map((item) =>{
    return item.prop_3;
})

console.log(indexOfElement.indexOf('val_23'));