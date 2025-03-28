const str = "javascript";

// find first repeated character

const firstchar = [...str].find((item,index) => str.indexOf(item) !== index )

console.log(firstchar)
