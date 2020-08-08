const students = [
    { id: 21, name: 'Omar Sunny' },
    { id: 31, name: 'Mannaaa' },
    { id: 41, name: 'Deepjol' },
    { id: 44, name: 'arif' }
];
// output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     output.push(element.id);
// }
// console.log(output)
const names = students.map(s => s.name);
const ids = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40)
console.log(names);
console.log(ids);
console.log(biggerOne)
