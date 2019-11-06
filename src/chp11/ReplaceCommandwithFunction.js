export class ChargeCalculator {
    constructor (customer, usage, provider){
    }

    charge(customer, usage, provider) {
        const baseCharge = customer.baseRate * usage;
        return baseCharge + provider.connectionCharge;
    }
}

export function charge(customer, usage, provider) {
    return new ChargeCalculator(customer, 100, provider).charge(customer, usage, provider);
}
