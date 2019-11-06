import {expect} from 'chai';
import {charge, ChargeCalculator} from '../../src/chp11/ReplaceCommandwithFunction'

describe('ChargeCalculator', () => {
    const customer = {baseRate: 0.1};
    const provider = {connectionCharge: 1000};

    it('should calculate base charge', () => {
        const chargeCalculator = new ChargeCalculator(customer, 100, provider);

        expect(chargeCalculator.baseCharge).to.equal(10);
    });

    it('should calculate total  charge', () => {
        expect(charge(customer, 100, provider)).to.equal(1010);
    });
});

