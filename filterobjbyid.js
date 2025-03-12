//To filter an object by id
const a = [
    { id: 1, name: "Alia" },
    { id: 2, name: "Dua" },
    { id: 3, name: "Raha" },
    { id: 4, name: "Charu" },
];

const filterById = a.filter(item =>{
    return item.id == 2;
})
console.log("Get item by id:",filterById[0])