// Given an array of student objects, group them by their grade.

const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" },
    { name: "David", grade: "C" },
    { name: "Eve", grade: "B" }
];

// Group the students by their grade
/* { A : [{name:"alice"},{name:charlie,grade:"A"}], B....}*/

const groupStud = students.reduce((acc,student) => {
    if(!acc[student.grade]) {
        acc[student.grade] = []
    }

    acc[student.grade].push(student)
    return acc;
},{})

console.log("Group by gradde:", groupStud);