import {Branch} from "./branch";
import { Customer } from "./customer";




export class Bank{
    name:string;
    branches: Branch[];
    constructor(name:string){
        this.name=name;
        this.branches=[];
    }

    //Description: Adds the branch to the branches array. Each branch should only be added once.
    addBranch(branch: Branch): boolean {
        // const existingBranch = this.branches.find((b) => b.name === branch.name);
      
        // if (!existingBranch) {
        //   this.branches.push(branch);
        //   return true;
        // } else {
        //   return false;
        // }

        if (!this.branches.includes(branch)) {
            this.branches.push(branch);
            return true;
        }
        else {
            return false;
        } 
      }


// Description: Adds the customer to the branch of the bank. Each customer can only be added once to a branch.
    addCustomer(branch: Branch, customer: Customer):boolean{

        const newCB = this.branches.find((newCustomerToBranch) => newCustomerToBranch.name === branch.name);
        if(newCB){
            branch.addCustomer(customer);
            return true;
        }else{
            return false;
        } 
    }

    //Description: Adds a transaction of the amount for the customer with the specified customerId in the given branch.

    //doblecheck this one
    addCustomerTransaction(branch: Branch, customerId:number , amount:number):boolean{
        
        
        // const newCustomerTransaction = this.branches.find(
        //     (newc) => newc.getId() === branch.getId()
        //   );
        //   if (newCustomerTransaction) {
        //     newCustomerTransaction.addCustomerTransaction(customerId, amount);
        //     return true;
        //   }


        
        // }

            const foundBranch = this.branches.find(
                (newc) => newc.getName() === branch.getName()
              );
              if (foundBranch) {
                foundBranch.addCustomerTransaction(customerId, amount);
                return true;
              }
          
            return false;
          }

          
    

    findBranchByName(branchName:string):Branch[] | null{

        const matchedBranches = this.branches.filter((b) => b.name === branchName);
        if (matchedBranches.length > 0) {
            return matchedBranches;
        } else {

            return null;
        }

    }

    checkBranch(branch: Branch):boolean{

        if (this.branches.some((b) => b.name === branch.name)) {
            return true;
          } else {
            return false;
          }

    }

    listCustomers(branch:Branch, includeTransactions:boolean){

        const branchList=this.branches.find((branchLi)=> branchLi.name===branch.name);
        if(branchList) {
             if (includeTransactions) {
            return this.branches.map((branch) => {
                return {
                    branchName: branch.name,
                    customers: branch.customers.map((customer) => {
                        return {
                            customerName: customer.name,
                            transactions: customer.transactions
                        };
                    })
                };
            });
        } else {
            return null;
        }
       
    }
}}
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

// console.log(arizonaBank.branches)
// console.log(arizonaBank)
// console.log(customer1)

// console.log(westBranch.customers)
// console.log(sunBranch.customers)

// console.log(arizonaBank.checkBranch(westBranch));







/////////////////////////////////////////////////





// Create an instance of the Bank class
// const bank = new Bank("RH");

// const customer1 = new Customer("John", 1)
// const customer2 = new Customer("Anna", 2)
// const customer3 = new Customer("John", 3)
// // Add branches
// bank.addBranch('Branch A');
// bank.addBranch('Branch A');
// bank.addBranch('Branch C');

// console.log(bank)

// //


// const b1 = new Branch("AlRajhi");
// const c1 = new Customer("Nora", 8);
// const c2 = new Customer("leen", 5);
// const c3 = new Customer("leen", 5);

// b1.addCustomer(c1);
// b1.addCustomer(c2);
// b1.addCustomer(c3);



///

// bank.addCustomer('Branch A', customer1)
// bank.addCustomer('Branch A', customer3)
// bank.addCustomer('Branch A', customer1)
// bank.addCustomer('Branch A', customer2)


// console.log(bank.addCustomer)





// const arizonaBank = new Bank("Arizona");
// const arizonaBank1 = new Bank("yugkj");

// arizonaBank.addBranch("westBranch")
// arizonaBank1.addBranch("sunBranch")
// arizonaBank.addBranch("gg") 

// console.log(arizonaBank)

// console.log(arizonaBank.branches)


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


