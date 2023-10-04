import {transactions} from "./transactions.js";

const t1= new Transaction(1,2);
console.log(t1)

class Bank{
    constructor(name){
        this.name=name;
        this.branches=[];
    }
    addBranch(branch){
        return;
    }
    addCustomer(branch, customer){
        return;
    }
    addCustomerTransaction(branch, customerId , amount){
        return;
    }

    findBranchByName(branchName){
        return;
    }

    checkBranch(branch){
        return;

    }

    listCustomers(branch, includeTransactions){
        return;
    }
}



// const arizonaBank = new Bank("Arizona")
// const westBranch = new Branch("West Branch")
// const sunBranch = new Branch("Sun Branch")
// const customer1 = new Customer("John", 1)
// const customer2 = new Customer("Anna", 2)
// const customer3 = new Customer("John", 3)

// arizonaBank.addBranch(westBranch)
// arizonaBank.addBranch(sunBranch)
// arizonaBank.addBranch(westBranch) 

// arizonaBank.findBranchByName("bank")
// arizonaBank.findBranchByName("sun")

// arizonaBank.addCustomer(westBranch, customer1)
// arizonaBank.addCustomer(westBranch, customer3)
// arizonaBank.addCustomer(sunBranch, customer1)
// arizonaBank.addCustomer(sunBranch, customer2)

// arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000)
// arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000)
// arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000)

// customer1.addTransactions(-1000)
// console.log(customer1.getBalance())
// console.log(arizonaBank.listCustomers(westBranch, true))
// console.log(arizonaBank.listCustomers(sunBranch,true))


