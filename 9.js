// largest of two numbers print the larger one

function largest (num1,num2) {
    if (num1>num2) return `${num1} is the largest`;
    else if (num1<num2) return  `${num2} is the largest`;
    else return "both are equal";
}

console.log(largest(6,3))