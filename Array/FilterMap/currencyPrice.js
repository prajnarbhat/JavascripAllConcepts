//Convert Prices to Different Currency & Filter Expensive Products

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 700 },
    { name: "Tablet", price: 450 }
];

// Get the price and hange it to diffret price and filter out the price > something
const filterProductprice = products.map(item => (
    {...item, price: item.price * 30} 
)).filter(element =>element.price > 5000)

console.log(filterProductprice)