//console.log(freqCount("geeksforgeeks"));

let str = "geeksforgeeks"
let freq ={}

function freqOfCharacter(str){
    for ( x of str ){
        console.log(x)
        freq[x] = (freq[x] || 0) + 1
    }
    return freq;
}

console.log(freqOfCharacter("geeksforgeeks"));