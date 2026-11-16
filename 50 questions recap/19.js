// Count the digits of the number

let num = 12345;
let count = 0;

while(num > 0) {
    count +=1;
    num = Math.floor(num/10);
}

console.log(`The total digits are ${count}`);