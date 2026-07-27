// Voting using function

function voting(age){
    if (age>=18) return `You are eligible for vote as you are ${age}`;
    else return `You are not eligible for vote as you are ${age}`;
}

console.log(voting(12))