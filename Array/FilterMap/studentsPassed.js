// Find Students Who Passed Math & Increase Their Scores
//  Filter students who passed Math and increase their scores by 10%.

const students = [
    { name: "Alice", subject: "Math", score: 70 },
    { name: "Bob", subject: "Science", score: 60 },
    { name: "Charlie", subject: "Math", score: 45 },
    { name: "David", subject: "Math", score: 80 }
];

// first filter whose score greater than specified score
// then get the objects of those score and incraese their score

const updatedStud = students.filter(student => (
    student.subject == "Math" 
)).filter(item => (item.score > 50)).map(item => ({...item,score: item.score * 1.1}))

console.log(updatedStud)
