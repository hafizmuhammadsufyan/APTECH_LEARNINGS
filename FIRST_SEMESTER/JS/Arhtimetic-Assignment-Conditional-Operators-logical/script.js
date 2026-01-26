console.log("Hello World")

let a = 1035
let b = 2000

console.log("Arthimetic Operator")
console.log("Addition", a + b)
console.log("Subtraction", a - b)
console.log("Multiplication", a * b)
console.log("Division", a / b)
console.log("Exponential", a ** b)
console.log("Modulos", a % b)


console.log("--------------------------------")

let x = 10
let y = 20

console.log(x)

console.log("Assignment Operator")

x += y
console.log(x)

x -= y
console.log(x)

x *= y
console.log(x)

x /= y
console.log(x)

x **= y
console.log(x)

x %= y
console.log(x)


console.log("--------------------------------")


let q = 10
let w = 20

console.log("Conditional Operators")

console.log("Equal to", q == w)
console.log("Loose Equal to", "3" == 3)
console.log("Strict Equal to", "3" === 3)
console.log("Not Equal to", q != w)
console.log("Not Equal to", 10 != "11")
console.log("Not Equal to", 10 !== "10")
console.log(10 < 10) //False
console.log(10 < 20) //True
console.log(10 >= 10) //True
console.log(10 >= 100) //False
console.log(10 <= 450) //true
console.log(10 >= 0) //true


console.log("--------------------------------")
console.log("Conditional Operators")


//AND &&

let age = 18
let paySlip = true
let clh = true

console.log("Eligible for Account", age>=18 && paySlip && clh)

//OR ||
console.log("OR", 10==10 || 10<10)

//NOT !

console.log("NOT" , !(true))
console.log("NOT" , !(false))