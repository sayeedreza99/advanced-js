// function stopWatch() {
//     let count = 0;
//     return function () {
//         count = 9 + count;
//         return count;
//     }
// }

// const clock1 = stopWatch();
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());


function stepByStep() {
    let step = 0;
    return function () {
        step++;
        return step;
    }
}

const stepNumer = stepByStep();
console.log(stepNumer())
console.log(stepNumer())
console.log(stepNumer())
console.log(stepNumer())


const stepNumer2 = stepByStep();
console.log(stepNumer2());
console.log(stepNumer2());
console.log(stepNumer())