// Reverse of a number

function reverse(num){
    let revnum = 0;
    while(num!==0){
        let ld=0;
        ld = num%10;
        revnum = revnum*10+ld;
        num = Math.floor(num/10);

    }
    return revnum;
}

console.log(reverse(1001))