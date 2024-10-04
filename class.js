const products = [
    { id: 1, name: 'Lenovo', price: 65000 },
    { id: 2, name: 'Asus', price: 75000 },
    { id: 3, name: 'Dell', price: 85000 },
    { id: 4, name: 'Mac', price: 165000 }
];
// similar
// has some properties and method
class Product {
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`)
    }
}
const lenovo = new Product('Le Le Lenovo')
// console.log(lenovo);
// lenovo.speak('oba kita kou');

// Another example of class and constructor
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log('Sir is teaching Math');
    }
}
const tapan = new Teacher("Rakibul Hassan", 'Physics');
console.log(tapan);

const rashid = new Teacher('Rashid Sir', 'English');
console.log(rashid);

