export class Order {
    constructor(quantity, itemPrice) {
        this.quantity = quantity;
        this.itemPrice = itemPrice;
    }

    get finalPrice() {
        const basePrice = this.quantity * this.itemPrice;

        return this.discountedPrice(basePrice, this.discountLevel());
    }

    discountLevel() {
        return this.quantity > 100 ? 2 : 1;
    }

    discountedPrice(basePrice, discountLevel) {
        switch (discountLevel) {
            case 1: return basePrice * 0.95;
            case 2: return basePrice * 0.9;
        }
    }
}

