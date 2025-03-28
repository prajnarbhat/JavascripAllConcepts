// ??== (Nullish Coalescing Assignment) 

const expenses = [
    { amount: 50, type: "Food" },
    { amount: 30, type: "Transport" },
    { amount: 100, type: "Shopping" },
    { amount: 20, type: "Food" },
    { amount: 40, type: "Transport" }
];

// if acc[Food] == null or undefined create a new array and push the individual element to the array

const expenseAmount = expenses.reduce((acc,expense) => {
    (acc[expense.type] ??= []).push(expense);

    return acc;
},{})

console.log(expenseAmount)