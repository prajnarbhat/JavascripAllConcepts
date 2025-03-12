// count number of words

const words = "hi hello jhvjhvj";
let num = 1;
for(let i = 0; i < words.length; i++){
    console.log(words[i])
    if( words[i] == " "){
        num += 1;
    }
}
console.log(num)