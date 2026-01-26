//JSON should be like this with keys wrapped in inverted commas

let js_objNot = {
    "name": "Ali",
    "age": 18,
    "isStudent": true
}


// creating objects inside object like multi object holder like complex element in XML

let js_obj_product = {
    "name": "Laptop",
    "price": 50000,
    "specs": { "processor": "i5", "generation": "8th", "ram": "8gb", "rom": "128gb", "distType": "SSD" }

}



// data types that JSON allows

let data_type = {
    "string": "Hello World!",
    "number": 123,
    "boolean": true,
    "null": null,
    "array": [1, 2, 3],
    "object": { "key": "value" }
}

//converting pure js object to JSON

let person = {
    name: "Ali",
    age: 25,
    edu: null,
    id: true
}

// method to convert JS_object to JSON (JS_obj -> JSON)

let convertObj = JSON.stringify(person)

//printing normal obj
console.log(person)
console.log(typeof person)


//printing converted JSON
console.log(convertObj)
console.log(typeof convertObj)


// method to converting JSON to JS_object (JSON -> JS_obj)
let jsonToObj = JSON.parse(convertObj)

// printing converted object from JSON

console.log(jsonToObj)
console.log(typeof jsonToObj)


// accessing objects

let user ={
    "name":"Ali",
    "age":22,
    "address":{
        "city":"karachi",
        "zipCode":"54000"
    }
}

console.log(user.address.city)

