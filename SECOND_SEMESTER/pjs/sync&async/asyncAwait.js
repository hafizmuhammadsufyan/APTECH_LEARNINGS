

function washClothes() {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Clothes are Washed");
                resolve()
            }, 5000);
        })
    )
}

function dryClothes() {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Clothes are Dried");
                resolve()
            }, 5000);
        })
    )
}

async function doLaundry(){
    await washClothes()
    await dryClothes()
}

doLaundry()