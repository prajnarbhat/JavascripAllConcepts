// Calculate total price by product

const cart = [
    { product: "Shirt", price: 20, quantity: 2 },
    { product: "Jeans", price: 40, quantity: 1 },
    { product: "Shoes", price: 50, quantity: 1 }
];

// 50+40+20+20

const totalPrice = cart.reduce((acc,item) => {
    acc = acc + item.price * item.quantity;
    return acc;
},0)

console.log(totalPrice)