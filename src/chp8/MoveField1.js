export class Customer {

    constructor(name, discountRate) {
        this._name = name;
        this._contract = new CustomerContract(this.dateToday(), discountRate);
    }

    get discountRate() {
        return this.__discountRate;
    }

    _setDiscountRate(aNumber) {
        this._contract.discountRate = aNumber;
    }

    becomePreferred() {
        this._setDiscountRate(this._contract.discountRate + 0.03);
        // other nice things
    }

    applyDiscount(amount) {
        return amount.subtract(amount.multiply(this._contract.discountRate));
    }

    dateToday() {
        return new Date();
    }
}

class CustomerContract {
    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }

    get discountRate() {
        return this._discountRate;
    }
    set discountRate(value) {
        this._discountRate = value;
    }


}