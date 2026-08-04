// Use Reduce function to summarize

let arr = [10,20,30];
let newarr = arr.reduce(function (acc,val){
    return acc+val;

},0);
console.log(newarr);
