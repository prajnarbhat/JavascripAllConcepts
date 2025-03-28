const f = ["a","b","c","a","a","b"]

count = {};
const freqEle = f.forEach(element => {
    count[element] = (count[element] || 0) + 1;
})

console.log(count)