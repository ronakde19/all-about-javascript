// Use .some() to check whether any student scored less than 75

let arr = [10,45,67,89,37];
let ans = arr.some(val=>{
    return val<35;
});
console.log(ans);
