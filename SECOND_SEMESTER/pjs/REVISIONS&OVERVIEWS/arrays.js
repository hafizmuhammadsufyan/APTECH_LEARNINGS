// Arrays basically are the collection of multiple data types
            // OR
// A single varialble that stores multiple  values


let arr = [1,2,3,4,5,6,7,8,9,0]

console.log(arr)

// arrays with index


let fruits = ["Apple","Banana","Orange"]

console.log(fruits)

console.log(fruits[2])


                // METHODS

// we also methods in arrays like length -> it returns the length of the array


console.log(fruits.length)

// mutable / unmutable 
        // values that are changeable updatable called mutable
// Arrays are mutbale 

fruits[0] = "PineApple"

console.log(fruits)


const array = [1,12,3,4,5]
console.log(array)

array[1] = 2

console.log(array)


// method to convert arrays into string "toString()"

console.log(array.toString())


// method to separate the array by converting it into the string "join("seperator")"

console.log(fruits.join(" - "))


// to remove the last element of the array we use ".pop()"

let products = ["Iphone","Samsung","Nokia","Infinix"]

console.log(products)

products.pop() // to remove last element of an array

console.log(products)

// method to add given element at last of an array ".push(0"

products.push("onePlus") // to add element 

console.log(products)


// loop we use "for of" loop for arrays / objects

for(let product of products){
        console.log(product)
}

