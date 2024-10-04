const products = [
    { id: 1, name: 'Lenovo', price: 65000 },
    { id: 2, name: 'Asus', price: 75000 },
    { id: 3, name: 'Dell', price: 85000 },
    { id: 4, name: 'Mac', price: 165000 }
];

// map
const id = products.map(products => products.id);
console.log(id);
const names = products.map(product => product.name);
console.log(names);
const prices = products.map(products => products.price);
console.log(prices);

// foreach
products.forEach(p => console.log(p.id));

// filter
const expensive = products.filter(p => p.price > 75000);
console.log(expensive);

// find
const affordable = products.find(p => p.price < 80000);
console.log(affordable);

// reduce
const total = products.reduce((acum, current) => acum + current.price, 0)
console.log(total);
