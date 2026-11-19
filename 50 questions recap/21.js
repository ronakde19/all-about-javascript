// To check if a number is prime or not

let num = 4;
let count = 0;
let finalnum = Math.sqrt(num);


for (let i=2; i <= finalnum; i++) {
    if (num%i== 0) {
        count += 1;
    }
}

if (count === 0) {
    console.log(`${num} is a prime number`);
}
else {
    console.log(`${num} is not a prime number`);
}