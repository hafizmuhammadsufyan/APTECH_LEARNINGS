// functions reduces the the effort of writing of code
// there are two types fo functions 1. void 2. return

// void
// it only prints the value dont return anything

// return
// it stores the values perform calculations and returns it so we can use it in our code as a varialble

// this is void function

function greet(name) {
    console.log("Hello ", name)
}


greet(123)


// this is return function

function square(n) {
    return n * n

    // console.log("square of ", n, "is", n * N)
}

let get_square = square(4)

console.log(get_square)

// the above were the examples of normal functions

// now we will write arrow functions -> what is arrow function

// arrow functions if modern way to write function in ES5 version it works exactly the same just the way of writing (syntsx) is changes


// arrow function

let square_arrow = (n) => {
    return n * n
}

let arrow_get_square = square_arrow(10)

console.log(arrow_get_square)

