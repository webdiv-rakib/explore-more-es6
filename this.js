class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`Sleeping now ${this.name}`);
    }
    activity() {
        this.sleep();
    }
}
const kodom = new Person('rakib', 26);
// console.log(kodom);
kodom.sleep();

const badam = new Person('Kacha Badam', 35);
badam.sleep();

// Vejal korlam
const lazy = kodom.sleep;
lazy();