const categories = [
    { name: "Electronics", products: ["Phone", "Laptop", "Tablet"] },
    { name: "Clothing", products: ["Shirt", "Jeans"] },
    { name: "Grocery", products: ["Milk", "Bread"] }
];

// Problem: Given an array of categories,
//  check if any category has "Laptop".

categorylaptop = categories.some(category => {
    return category.products.includes("Laptop");
})

console.log(categorylaptop)