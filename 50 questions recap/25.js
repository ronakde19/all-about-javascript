// count number of vowels in a given string

let str = 'Apple is good but android is emotion';
let vowels = ['a','e','i','o','u'];
let count = 0;

str = str.toLowerCase();

for (let i=0; i<str.length; i++) {
    if (vowels.includes(str[i])) {
        count++;
    }

}

console.log(count);