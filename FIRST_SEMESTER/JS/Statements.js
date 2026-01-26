//Conditional Statements

            //if Block
{

let number = 1444548783
if (number % 2 == 0){
    console.log("Even")
}
if (number % 2 != 0){
    console.log("Odd")
}

            //Thinking practice

let age = 18
let cnic = true
let paySlip = true


if (age >= 18 && cnic){
    console.log("Account Opened ")
   
    if(!paySlip){
        console.log("Pay slip required")
    }
}else{
    console.log("Not Eligible")
}
}
            //Nested if block
{
    let number = 0
    
    if(number > 0){
        console.log("Positive")
    }else if(number < 0){
        console.log("Negative")
    }else{
        console.log("Zero")
    }
}

{
                    //Task Block

    let percentage = 32

    if(percentage >= 80){
        console.log("A-1")
    }else if(percentage >=70){
        console.log("A")
    }else if(percentage >=60){
        console.log("B")
    }else if(percentage >=50){
        console.log("C")
    }else if(percentage >=40){
        console.log("D")
    }else if(percentage >=33){
        console.log("E")
    }else{
        console.log("F")
    }
}

                //IF Else through ES6
                // ES6 = modern way to write JS
                //Ternary Operator
{
    let age = 17
    let age_chk = age>= 18 ? "Adult" : "Not an Adult"
    console.log(age_chk)
}