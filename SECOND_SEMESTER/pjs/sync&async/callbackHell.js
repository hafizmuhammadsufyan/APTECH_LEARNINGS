//      craeting recursive function or recursive call back

// Recursive => if we use same function again and again in the function, as a call back funtion?

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log(`Data:`, dataId);
        if (getNextData) {
            getNextData()
        }
    }, 2000)
}


// callback hell 

getData(1, () => { getData(2, () => { getData(3, () => { getData(4, () => { getData(5) }) }) }) })