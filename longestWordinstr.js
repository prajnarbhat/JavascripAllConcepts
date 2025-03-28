let str = "This is a demo String find the largest word from it"

let largest = "";
let count = 0;

function largestWord(str){
    let split = str.split(" ");
    console.log(split)
     return split.sort((a,b) => b.length - a.length)[0]
}


console.log("Largest word",largestWord(str));
