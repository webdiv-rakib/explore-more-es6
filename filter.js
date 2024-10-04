// filter selects elements based on a condition and returns as array with the elements that fulfilled the condition
const numbers = [1, 5, 3, 7, 9, 12];
const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
const selected = players.filter(p => p % 2 === 1)
console.log(selected);