import {Purchase} from './purchase.js';

export class Shop {
    constructor(){
        this.listClients = [];
        this.listProducts = [];
        this.listPurchases = [];
    }
    
    addClients (client) {
        this.listClients.push(client);
    }

    delClients (client) {        
        this.listClients.forEach((item, i, listClients) => {
            if ( item.id == client.id ) {
            //    console.log('i =' + i);
               listClients.splice(i,1);
            } 
        });
    }

    addProducts (product) {
        this.listProducts.push(product);
    }

    delProducts (product) {        
        this.listProducts.forEach(function(item, i, listProducts) {
            if ( item.id == product.id ) {
            //    console.log('i =' + i);
               listProducts.splice(i,1);
            } 
        });
    }
    
    addPurchases (purchase){
        this.listPurchases.push(purchase);
    }

    // Продажа товара клиенту
    sellProduct (client, productName, count) {
        
        // let sum = product.cost * amount;
        //                             // name, type, amount, sum, purchaseTime = new Date()
        // let purchase = new Purchase(product.name, product.type, amount, sum);
        // this.addPurchases(purchase);
    }
}
