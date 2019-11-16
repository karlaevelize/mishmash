class ShoppingCart {
    constructor (){
        this.items = []
    }

    getItems(){
        return this.items
    }

    addItem(itemName, quantity, price){
        return this.items.push({
            name: itemName,
            pricePerUnit: price,
            quantity: quantity
        })
    }

    clear(){
        return this.items = []
    }

    total (){
        return this.items.reduce((total, item) =>
        total + item.quantity * item.pricePerUnit, 0) 
    }
}

module.exports = ShoppingCart