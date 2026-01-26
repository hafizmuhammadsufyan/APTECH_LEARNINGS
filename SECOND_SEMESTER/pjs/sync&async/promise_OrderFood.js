const orderFood = (foodItems) => {
    return (
        new Promise((resolve, reject) => {
            console.log(`Ordering.. ${foodItems}`);

            setTimeout(() => {
                let isAvailable = Math.random()

                if (isAvailable > 0.3) {
                    resolve(`Your order for: ${foodItems} is has been placed`)
                } else {
                    reject(`We are sorry ${foodItems} is out of Stock`)
                }
            }, 2000)
        })
    )
}


orderFood("Pizza")
    .then(orderPlacesd => console.log(orderPlacesd))
    .catch(outOfStock => console.log(outOfStock))
    .finally(()=>{console.log("Thank you");})