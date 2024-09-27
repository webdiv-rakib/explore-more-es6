// double the numbers inside of given array
const numbers = [11, 14, 8, 9, 3, 1];
const double = numbers.map(num => num * 2);
console.log(double);

const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus);

const half = numbers.map(num => num / 2);
console.log(half);

// finding out length of string inside an array
const friends = ['tom', 'john', 'michel'];
const lengths = friends.map(frnd => frnd.length);
console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);