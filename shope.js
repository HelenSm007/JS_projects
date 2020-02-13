export class Shop {
    constructor(){
        this.listClients = [];
        this.listProducts = [];
        this.listPurchases = [];
    }
    
    addClients = function(client) {
        this.listClients.push(client);
    }

    delClients = function(client) {        
        this.listClients.forEach((item, i, listClients) => {
            if ( item.id == client.id ) {
            //    console.log('i =' + i);
               listClients.splice(i,1);
            } 
        });
    }

    addProducts = function(product) {
        this.listProducts.push(product);
    }

    delProducts = function(product) {        
        this.listProducts.forEach(function(item, i, listProducts) {
            if ( item.id == product.id ) {
            //    console.log('i =' + i);
               listProducts.splice(i,1);
            } 
        });
    }
    
    addPurchases = function(purchase){
        this.listPurchases.push(purchase);
    }

    // Продажа товара клиенту
    sellProduct = function(product, date, amount) {
        let sum = product.cost * amount;
        let purchase = new Purchase(product.name, product.type, amount, sum);
        this.addPurchases(purchase);
    }
}
