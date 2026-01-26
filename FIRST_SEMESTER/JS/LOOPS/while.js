
{
    let pin = "1234"
    let amount = 80000

    let attempt = 0

    while (attempt < 3) {
        let user_pin = prompt("Enter Your 4 Digit Pin")
        if (user_pin === pin) {
            alert("Verified")
            break
        } else {
            attempt++
            alert("Failed! attempt" + attempt)

        }
        if (attempt == 2) {
            alert("Last Attempt")
        } else if (attempt == 3) {
            alert("Account Blocked")
        }

    }
}


let count = 0

while (count < 5) {
    console.log("count", count)
    count++
}