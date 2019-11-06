import {expect} from 'chai';
import {ChargeCalculator} from '../../src/chp11/ReplaceCommandwithFunction'

describe('ChargeCalculator', () => {
    const customer = {baseRate: 0.1};
    const provider = {connectionCharge: 1000};

    it('should calculate base charge', () => {
        const chargeCalculator = new ChargeCalculator(customer, 100, provider);

        expect(chargeCalculator.baseCharge).to.equal(10);
    });

    it('should calculate total  charge', () => {
        const chargeCalculator = new ChargeCalculator(customer, 100, provider);

        expect(chargeCalculator.charge).to.equal(1010);
    });

});
