const ar1 = ['a','b','c','a','a','a','b','b'];

const freq = {};

let count = 1;

const freqofele = ar1.forEach((element,index) => {
    console.log(element)
    //freq[element] = count;
    if(freq[element]){
        freq[element] += 1
    }else {
        freq[element] = 1;
    }
})

console.log("Frequency of element:", freq);