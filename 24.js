// Secret Number guesser

let guess = 7;

function iguess(num){
    while(true){
        if(num===guess){
            return "Guessed correct";
            break;
        }
        else if(num>guess){
            return "Lower it";
        }
        else return "Higher";

    }
}

console.log(iguess(7))