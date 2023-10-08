import {Branch} from "./branch";
import { Customer } from "./customer";




export class Bank{
    name:string;
    branches: Branch[];
    customers: any;
    constructor(name:string){
        this.name=name;
        this.branches=[];
    }

    //Description: Adds the branch to the branches array. Each branch should only be added once.
    addBranch(branch: Branch): boolean {


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
        return newCB ?branch.addCustomer(customer) : false;
    }


    addCustomerTransaction(branch: Branch, customerId:string , amount:number):boolean{
        


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
        if (matchedBranches) {
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

    listCustomers(branch:Branch, includeTransactions:boolean):void{

        const targetBranch = this.branches.find(
            (b) => b.name === branch.name
          );
          if (targetBranch) {
            for (const customer of targetBranch.customers) {
              console.log("Customer Name:", customer.name);
              console.log("Customer ID:", customer.id);
      
              if (includeTransactions) {
                console.log("Transaction Details:");
                for (const transaction of customer.transactions) {
                //   console.log("Transaction ID:", transaction);
                  console.log("Date:", transaction.date);
                  console.log("Amount:", transaction.amount);
                  console.log("");
                }
            }
          }
        }
      }
    }
