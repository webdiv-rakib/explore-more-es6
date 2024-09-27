/**
 * 1. var let const
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructure and spread
 * 6. Object.keys, Object.values, Object.entries
 * 7. for of used in array and string
 * 8. for in used in object
 */
const a = 56;
const numbers = [35, 45, 55];
const person = {
    name: 'Rakib'
}

// template string
const message = `Hi, ${person.name} has a: ${a} access to ${numbers[1]}`
console.log(message);

// arrow function
const square = x => x * x;
const sum = (a, b) => a + b;

// destructure
const { age, z, ...others } = { x: 2, y: 5, z: 3, name: 'Rakib', age: '55' }
// spread
const [first, second, ...other] = ['ram', 'sam', 'jodu', 'modhu']
