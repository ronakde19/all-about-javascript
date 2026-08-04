// Use .every() to check all numbers are even or not

arr = [2,4,5,6,8];
let ans = arr.every(function (val){
    return val%2===0;
});
console.log(ans);
