// largest and smallest element inside an array

let arr = [12, 4, 7, 76, 13, 21];
let largest = arr[0];
let smallest = arr[0];

for (let i=0; i<arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }

    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log(`The largest number is ${largest}`);
console.log(`The smallest number is ${smallest}`);