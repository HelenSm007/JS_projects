//История покупок
export class Purchase {
    constructor (name, type, amount, sum, purchaseTime = new Date()){
        this.name = name;
        this.type = type;
        this.amount = amount;
        this.sum = sum;
        this.purchaseTime = purchaseTime;
    }
}
/*
let time = new Date();
console.log(time);
*/