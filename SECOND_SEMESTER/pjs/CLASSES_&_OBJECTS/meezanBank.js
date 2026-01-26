class MeezanBank{
    constructor (name, balance){
        this.name = name
        this.balance = balance
    }

    deposit(amount){
        this.balance += amount
    }

    withdrawl(amount){
        
        if(this.balance >= amount){
            console.log(`Withdraw Successfull`);
            this.balance -= amount


        }else{
            console.log("Insufficent Balance");
        }
    }

    checkBalance(){

        console.log(`your Current balance is ${this.balance}`);

    }
    
}


let customer1 = new MeezanBank("Ali", 5000)
customer1.deposit(25000)
console.log(customer1.balance)
customer1.withdrawl(1500)
customer1.checkBalance()