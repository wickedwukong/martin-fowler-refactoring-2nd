export class ChargeCalculator {
    constructor (customer, usage, provider){
        this._customer = customer;
        this._usage = usage;
        this._provider = provider;
    }
    
    get charge() {
        const baseCharge = this._customer.baseRate * this._usage;
        return baseCharge + this._provider.connectionCharge;
    }
}

export function charge(customer, usage, provider) {
    return new ChargeCalculator(customer, 100, provider).charge;
}
