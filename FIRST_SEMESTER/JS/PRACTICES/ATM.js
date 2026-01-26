let pin = 1234
let balance = 55000

let userPin = prompt("Enter Your Pin")

if (userPin == pin) {
    let options = prompt("Options: 1. Check Balance 2. Withdraw Money 3. Deposit Money")
    if(options == 1){
        alert("Your Balance is " + balance)
    }else if(options == 2){
        let withdraw = Number(prompt("Enter withdraw Amount"))
        if(withdraw <= balance){
            balance -= withdraw
            alert("Transaction Successfull!")
            alert("Your Current Balance is " + balance)
        }else{
            alert("Insuficient Balance")
        }
    }else if(options == 3){
        let deposit = Number(prompt("Enter Amount to Deposit:"))
        balance += deposit
        alert("Deposit Successfull!")
        alert("Your Current Balance is " +balance)
    }else{
        alert("Invalid Option")
    }
}else{
    alert("Invalid Pin")
}
