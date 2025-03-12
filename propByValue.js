let employees = [
    { name: "Tony Stark", department: "IT" },
    { name: "Peter Parker", department: "Pizza Delivery" },
    { name: "Bruce Wayne", department: "IT" },
    { name: "Clark Kent", department: "Editing" }
];

// we need a name by IT
const filterByEmp =employees.filter(item =>{
    return item.department == "IT";
})

console.log("Filter by IT:",filterByEmp);

const getname = filterByEmp.map(item =>{
    return item.name;
})

console.log(getname);
