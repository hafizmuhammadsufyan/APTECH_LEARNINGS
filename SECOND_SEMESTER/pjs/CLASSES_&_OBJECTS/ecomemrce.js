class Customer {
    constructor(name, balance) {
        this.name = name
        this.balance = balance
    }

    purchaseAmount(amount) {
        if (amount <= this.balance) {
            this.balance -= amount
            console.log(`${this.name}'s Purchase Successfull of RS: ${amount}`)
        } else {
            console.log("Insufficent Balance");
        }
    }

    checkBalance(){
        console.log(`${this.name}'s Balance is RS: ${this.balance}`)

    }
}


let customer1 = new Customer("Ali", 2000)

customer1.checkBalance()
customer1.purchaseAmount(200)
customer1.checkBalance()


let customer2 = new Customer("Ali", 25600)

customer1.checkBalance()
customer1.purchaseAmount(25000)
customer1.checkBalance()