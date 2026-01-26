let name = "Ali"

// scope global

var x = 45
console.log("outside ", x)

{
    var x = 90
    console.log("inside block ", x)
}

console.log("outside block ", x)


// scope block

let y = 45
console.log("outside ", y)

{
    let y = 90
    console.log("inside block ", y)
}

console.log("outside block ", y)


//scope constant 

// const acc_bal = 5000
// acc_bal += 1000

// console.log(acc_bal)


let city = "Karachi" //string
let price = 55.55    //number
let isOpen = true    //boolean
let car = null       //null
let creditCard       //Undefined
let student = {name: "Ali", age: 29}  //object


                //operators


let num1 = 20
let num2 = 40


console.log("Arthemetic Operators......" )

console.log("Addition: ", num1 + num2 )
console.log("Subtraction: ", num1 - num2 )
console.log("Multiplication: ", num1 * num2 )
console.log("Devision: ", num1 / num2 )
console.log("Modulas/Remainder: ", num1 % num2 )



console.log("Assignment Operators.......")


console.log("Assignment = ")
console.log("Addition Assignment: ", num1 += num2 )
console.log("Subtraction Assignment: ", num1 -= num2 )
console.log("Multiplication Assignment: ", num1 *= num2 )
console.log("Devision Assignment: ", num1 /= num2 )
console.log("Modulas/Remainder Assignment: ", num1 %= num2 )


console.log("Conditional Operators returns true and false..........")
console.log("Greater then", num1 > num2)
console.log("Less then", num1 < num2)
console.log("Greater then or equal to", num1 >= num2)
console.log("Less then or equal to", num1 <= num2)
console.log("Equal to", num1 == num2)
console.log("stricktly equal to", num1 === num2)
console.log("not equal to ", num1 != num2)
console.log("Stricktly not equal to ", num1 !== num2)


console.log("Increament / Decreament Operators........")

let i = 1
console.log("Increament", i++)
console.log("Decreament", i--)


console.log("Logical Operators.......")

console.log(num1 > num2 && num2 < num1)
console.log(num1 > num2 || num2 < num1)

let edu = true

console.log("Not Operator", !edu)




