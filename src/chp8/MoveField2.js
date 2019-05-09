class Account {

    constructor(number, type) {
        this._number = number;
        this._type = type;
    }

    get interestRate() {
        return this.type.interestRate;
    }
}

class AccountType {
    constructor(nameString, interestRate) {
        this._name = nameString;
        this._interestRate = interestRate;
    }

    get interestRate() {
        return this._interestRate;
    }
}