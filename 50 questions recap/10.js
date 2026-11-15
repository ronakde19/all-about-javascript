const num1 = 12;
const num2 = 15;
const num3 = 27;

if (num1 > num2 && num1 > num3 ) {
    console.log(`The largest number is ${num1}`);
}
else if (num2 > num3 && num2 > num3 ) {
    console.log(`The largest number is ${num2}`);
}
else if (num3 > num2 && num3 > num2 ) {
    console.log(`The largest number is ${num3}`);
}
else {
    console.log("All 3 numbers are equal");
}