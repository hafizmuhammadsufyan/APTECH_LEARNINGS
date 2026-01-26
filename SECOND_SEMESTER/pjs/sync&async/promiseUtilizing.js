// promise under function , returning promise prc

// function getData (dataId, getNewData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("Data fetched")
//             if(getNewData){
//                 getNewData()
//             }            
//         }, 3000);
//     })
// }


// promise .then and .catch concept 

// .then runs when the promise is resolved and stores the variable of resolved data
// .catch runs when the promise is rejected and stores the variable of rejected data


let promise = new Promise((resolve,reject)=>{
    let success = false;
    if(success){
        resolve("Data fetched successfully")
    }else{
        reject("Error in fetching data")
    }
})

promise
    .then(result => console.log(result))
    .catch(error => console.log(error))