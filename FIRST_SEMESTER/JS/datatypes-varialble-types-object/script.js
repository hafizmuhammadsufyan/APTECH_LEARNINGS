// var x = 55
// console.log(x)
// {
//     var x = 120
//     console.log(x)
// }
// x = x + 60
// console.log(x)


// let my_name = "Sufyan" (string)
// let age = 20 (number)
// let have_account = true (boolean)
// let balance = 15478000000021457860000n (bigint)
// let black_amount (undefined)
// let amount = null (null)
// console.log(my_name, age, have_account, balance, black_amount, amount)
// console.log(typeof my_name, typeof age, typeof have_account, typeof balance, typeof black_amount, typeof amount)


let object_1 = {
    student_name: "Abdullah",
    age: 25,
    fees: 9000,    
}

let object_2 = {
    student_name: "Ahmed",
    age: 21,
    fees: 9000
}
console.log(object_1)
console.log(object_1.student_name)
console.log(object_1.age)
console.log(object_1.fees)
console.log(object_1["student_name"])


object_1.have_pics = true
object_1.age = object_1.age + 1

console.log(object_1)
