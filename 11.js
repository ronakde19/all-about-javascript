// Grade Calculator 

function grading(grade){
    if (grade>=90 && grade<=100) return "A";
    else if (grade>=80 && grade<=80) return "B";
    else if (grade>=70 && grade<=79) return "C";
    else if (grade>=60 && grade<=69) return "D";
    else if (grade>=50 && grade<=59) return "E";
    else return "F";
}

console.log(grading(67))