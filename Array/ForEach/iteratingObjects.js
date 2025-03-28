const obj = {
    "name": "Prajna",
    "age": 20,
    "city": "sagra"
}

console.log(Object.entries(obj))

const iterate = Object.entries(obj).forEach(([key,value]) => {
    console.log(`${key} : ${value}`)
})