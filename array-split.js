const nums = [1, 2, 3, 45, 2, 23, 24];
const part = nums.slice(2, 5);
const removed = nums.splice(2, 5, 88);
const together = nums.join('|');
console.log(part);
console.log(nums);
console.log(removed);
console.log(together)