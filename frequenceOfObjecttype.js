let arr = [function () { }, new Object(), [], {},
    NaN, Infinity, undefined, null, 0
];

const countocc = (arr) => {
    return  arr.reduce((acc,curr) => {
     console.log(curr)
     if ( acc[typeof curr] ) {
        acc[typeof curr] = acc[typeof curr] + 1;
     }
     else {
        acc[typeof curr] = 1;
     }
     return acc;
},{})
}

console.log(countocc(arr));