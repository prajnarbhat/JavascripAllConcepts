const products = [
    { name: "Laptop", category: "Electronics" },
     { name: "Shirt", category: "Clothing" },
     { name: "Phone", category: "Electronics" },
     { name: "Pants", category: "Clothing" }
];

/* Output:
{
  Electronics: [
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" }
  ],
  Clothing: [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" }
  ]
}
*/

const reduceByProp = products.reduce(function(acc,product) {
    if(!(acc[product.category])) {
        acc[product.category] = []
    }

    acc[product.category].push(product)

    return acc;
},{})

console.log(reduceByProp)