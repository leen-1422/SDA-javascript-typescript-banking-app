import { Transaction } from "./transactions";

export class Customer{
    name: string;
    id: number;
    transactions: Transaction [];

    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
        this.transactions= [];

    }
    getName():string{
        return this.name;
    }
    getId():number{
        return this.id;
    }
    getTransactions():Transaction []{
       return this.transactions

    }

    getBalance(): number{
        const balance = this.transactions.reduce(
            (total,transaction ) => total +transaction.amount,0
           );
        if (balance>0){
            return balance;
        }else {
            return 0;
        }
    }

    addTransaction(amount:number): boolean{
        if (this.transactions.push(new Transaction(amount, new Date()))){
            return true;

        }else{
            return false;
        }
        
    }
}


