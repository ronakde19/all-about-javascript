// Lenggth of a string without using .length function

let str = "Hello";
let count = 0;

for (let char of str) {
    count++
}

console.log(`The count is ${count}`);