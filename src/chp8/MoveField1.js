export class Customer {

    constructor(name, discountRate) {
        this._name = name;
        this._setDiscountRate(discountRate);
        this._contract = new CustomerContract(this.dateToday());
    }

    get discountRate() {
        return this._discountRate;
    }

    _setDiscountRate(aNumber) {
        this._discountRate = aNumber;
    }

    becomePreferred() {
        this._setDiscountRate(this.discountRate + 0.03);
        // other nice things
    }

    applyDiscount(amount) {
        return amount.subtract(amount.multiply(this.discountRate));
    }

    dateToday() {
        return new Date();
    }
}

class CustomerContract {

    constructor(startDate) {
        this._startDate = startDate;
    }
}