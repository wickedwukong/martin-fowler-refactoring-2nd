import {expect} from 'chai';
import {Customer} from '../../src/chp8/MoveField1'

describe('Customer', () => {
    it('calculates discount', () => {
        var Money = require('js-money');
        const customer = new Customer("Mike", 0.05);
        expect(customer.applyDiscount(new Money(500, Money.EUR))).to.eql(new Money(475, Money.EUR));
    });
});
