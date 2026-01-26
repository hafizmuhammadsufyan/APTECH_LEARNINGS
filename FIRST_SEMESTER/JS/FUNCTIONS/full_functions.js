function greet() {
    console.log("Hey, there!")
}

greet()
greet()
greet()
greet()
greet()
greet()
greet()
greet()


function greetParameter(name) {
    console.log("Hello", name)
}


greetParameter("Sufyan")
greetParameter("Ali")
greetParameter("Subhan")
greetParameter("Shayan")


// function sum(num1, num2) {
//     alert(num1 + num2)
// }


// sum(Number(prompt("Enter number to perform sum")), Number(prompt("Enter 2nd Number to perform sum")))



//Task calculate percentage

{
    function percentageCalculator(total, obtain, object){
         let percentage = obtain / total * 100
         object.percentage = percentage
    }


  let sufyan = {
    name: "Sufyan",
    age: 20,

  }
  percentageCalculator(1100,950, sufyan)
  console.log(sufyan)
}


// optional parameter

function opt(a,b,c=0){
    return(a+b+c)
}

let output= opt(10,20,50)

console.log(output)