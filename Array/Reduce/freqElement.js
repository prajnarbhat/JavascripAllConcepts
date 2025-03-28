const num = ['a','a','b','c','b','b'];

const freqEle = num.reduce(function(acc,element,index,num) {
    acc[element] = (acc[element] || 0) + 1;
    return acc
},{})

console.log("Freq of element:", freqEle)