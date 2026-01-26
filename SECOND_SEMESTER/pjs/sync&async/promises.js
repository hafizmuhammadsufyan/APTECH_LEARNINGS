// pending promise || didn't use resolve and reject

let promise_object_pending = new Promise((resolve, reject) => {
    console.log("hey I am promise");
})


// resolved promise || using resolve parameter

let promise_object_resolve = new Promise((resolve, reject) => {
    resolve("Data fethced")
})


// rejected promise || using reject parameter

let promise_object_reject = new Promise((resolve, reject) => {
    reject("Fetching Failed")
})