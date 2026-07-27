// Leap Year

function leapyear(year){
    if ((year%4===0 && year%100!==0) || (year%400===0)){
        return `${year} is a Leap Year`;

    } else {
        return `${year} is not a Leap Year`;

    } 
}

console.log(leapyear(2024))