export class Customer{
    constructor(name,id){
        this.name=name;
        this.id=id;
        this.transactions= [];

    }
    getName(){
        return this.name;
    }
    getid(){
        return this.id;
    }
    getTransactions(){
       return  this.transactions

    }

    getBalance(){
        return;
    }

    addTransaction(amount,number){
        return this.transactions.push(amount*number);
    }
}
