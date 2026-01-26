let age = 20

// normal if

if (age >= 18) {
    console.log("Eligible")
}

// if else

if (age >= 18) {
    console.log("Eligible")
} else {
    console.log("Not Eligible")
}

// nested if

let citizen = false

if (age >= 18) {
    if (citizen) {
        console.log("Eligible for vote")
    }
}


let userName = "admin"
let pass = "admin123"

if (userName === "admin") {
    if (pass === "admin123") {
        console.log("Login Successfull")
    } else {
        console.log("Invalid Password")
    }
} else {
    console.log("Invlid Username")
}


// if else if

let marks = 90

if (marks >= 90) {
    console.log("Grade A")
} else if (marks >= 70) {
    console.log("Grade B")
} else {
    console.log("Below B")
}


// SWitch Case

let day = "Friday"

switch(day){
    case "Monday":
        console.log("Start of the week")
        break;
    case "Friday":
        console.log("Weekend Soon")
        break;
    default:
        console.log("Just another day")
}