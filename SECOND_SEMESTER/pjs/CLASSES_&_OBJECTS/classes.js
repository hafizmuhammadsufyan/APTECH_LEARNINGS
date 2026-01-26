
// creating class
class User {

    // this is special type of function which calls whenever the class calls

    constructor(name, email, age) {
        this.name = name
        this.email = email
        this.age = age
    }

    // we can also create functions and methods inside the class and we use it multiple times

    confirmAdmission(date){
        return `Hey ${this.name} your admission is confirmed, your classes will be started from ${date}`
    }
}

// calling class and creating object by seeing constructor

let user1 = new User ("Ali","ali@gmail.com" ,18)


// printing function that has been created inside the class

console.log(user1.confirmAdmission("1-1-2026"));