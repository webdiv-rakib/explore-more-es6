// map --> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array
const numbers = [2, 4, 6, 8, 10]

function doubleIt(num) {
    console.log('num now', num);
    return num * 2;
}

const double2 = n => n * 2;
const result = numbers.map(doubleIt);
// console.log(result);

const outPut2 = numbers.map(n => n * 2);
console.log(outPut2);

const outPut = numbers.map(double2);
console.log(outPut);





// const doubled = []
// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);