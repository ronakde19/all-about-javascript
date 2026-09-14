let count = 100;

let interval = setInterval(function(){
    if (count>=0){
        console.log(count);
        count--;
    } else clearInterval(interval);
},1000);