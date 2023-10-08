import { Transaction } from "./transactions";

export class Customer{
    name: string;
    id: string;
    transactions: Transaction [];

    constructor(name:string,id:string){
        this.name=name;
        this.id=id;
        this.transactions= [];

    }
    getName():string{
        return this.name;
    }
    getId():string{
        return this.id;
    }

    getTransactions():Transaction []{
       return this.transactions

    }

    getBalance(): number| string{
        const balance = this.transactions.reduce(
            (total,transaction ) => total +transaction.amount,0
           );
        return balance>0 ? balance: "the value cant be negative"
            
        
    }

    addTransaction(amount:number): boolean{
        return this.transactions.push(new Transaction(amount, new Date())) === 1;
        
    }
}


