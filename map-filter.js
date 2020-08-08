const numbers = [3, 1, 3, 56, 43];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const elements = numbers[i];
//     const result = elements * elements;
//     output.push(result);
// }

// function square(element) {
//     return element * element;
// }

// const square = x => x * x;
// const square = element => element * element;

// const output = numbers.map(square);

// const output = numbers.map(function (element, index, array) {
//     return element * element;
// })

const output = numbers.map(x => x * x);

const result = numbers.filter(x => x > 5);
const result2 = numbers.find(x => x > 5); //first elemet k dibay

console.log(output);
console.log(result);
console.log(result2);


