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
        
    }
}

module.exports = ShoppingCart