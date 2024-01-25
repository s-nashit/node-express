class CakeShop{
    constructor(){this.orderNumber = 0}

    order() {this.orderNumber++}

    getOrderNumber() {console.log(`we are working on: ${this.orderNumber}`)}
}

module.exports = CakeShop

