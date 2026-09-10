let count = 0;
let seconds = 20;
let progress = document.querySelector(".progress-fill");
let prgtext = document.querySelector(".percentage");

let inv = setInterval(function(){
    if (count<=99){
        count++;
        progress.style.width = `${count}%`;
        prgtext.textContent = `${count}%`;
    } else {
        document.querySelector(".status").textContent = "Downloaded.";
        clearInterval(inv);
    }

},(seconds*1000)/100);