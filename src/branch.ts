import { Customer } from "./customer";
// import { Transaction } from "./transactions";



export class Branch{
    name:string;
    customers: Customer[];
    

    constructor(name:string){
        this.name=name;
        this.customers= [];

    }

    getName():string{
        return this.name;

    }
    getCustomers():Customer[]{
        return this.customers;

    }
    addCustomer(customer:Customer):boolean{

        

        // const checkCustomer = this.customers.find(
        //     (newCustomer ) =>  newCustomer.id === customer.id);

        // if (!checkCustomer) {
        //     this.customers.push(customer);
        //     return true;
        // }
        // else {
        //     return false;
        // } 

        

        if (!this.customers.includes(customer)) {
            this.customers.push(customer);
            return true;
        }
        else {
            return false;
        } 
    }


//Adds a transaction of the amount for the customer with the specified customerId.
    addCustomerTransaction(customerId:number, amount:number):boolean{
        // const addAmount = this.customers.includes( 
        //     (newCustomer) => newCustomer.id === customerId.id);
        
        // if (addAmount){
        //     addAmount.addTransaction.push(amount);
        //     return true;
            
        // }
        // else{
        //     return false;
        // }

        const customer = this.customers.find((customer) => customer.id === customerId);
        if(customer){
            customer.addTransaction(amount);
            return true;
            
            // customer.transactions.push(new Transaction(amount, new Date()));
            // return true;
        }else{
            return false;
        }  

    }
}


