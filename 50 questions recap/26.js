// String palindrome or not

let str = 'eppe';
let rev = '';

for (let i=str.length-1; i>=0; i-- ) {
    rev += str[i];
}

if (rev === str) {
    console.log("String is Palindrome");
}

else {
    console.log("String is not Palindrome");
}