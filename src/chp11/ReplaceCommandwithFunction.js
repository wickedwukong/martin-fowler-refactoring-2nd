export class ChargeCalculator {
    charge(customer, usage, provider) {
        const baseCharge = customer.baseRate * usage;
        return baseCharge + provider.connectionCharge;
    }
}

export function charge(customer, usage, provider) {
    return new ChargeCalculator().charge(customer, usage, provider);
}
