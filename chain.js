// data access
const data = [{ id: 1, name: 'abul', address: 'kochu khet' }];
console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000 },
        { id: 2, name: 'macbook', price: 225000 }
    ]
}
// second product price
// console.log(products.data[1].price)
// console.log(products.data[1].price);
// console.log(products.data[0].name);

// this one called chain
const user = {
    id: 5001,
    name: 'rakibul hassan',
    address: {
        street: { first: '5/1 uttor side', second: 'poribag er goli', third: 'no dorai' },
        city: 'Dhaka'
    }
}
// console.log(user.address.street.second);
// optional chaining
const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'Tangail',
        country: 'Bangladesh'
    }
}
console.log(user2.address.street?.second);