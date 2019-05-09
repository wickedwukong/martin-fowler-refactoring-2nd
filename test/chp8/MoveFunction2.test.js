import {expect} from 'chai';
import {Account, AccountType} from '../../src/chp8/MoveFunction2'

describe('Account', () => {
    it('has bankCharge of 4.5 when daysOverdrawn is 0', () => {
        expect(new Account(new AccountType('Premium'), 0).bankCharge).to.equal(4.5);
        expect(new Account(new AccountType('Non-premium'), 0).bankCharge).to.equal(4.5);
    });

    it('has bankCharge more than 4.5 when daysOverdrawn is more than 0', () => {
        expect(new Account(new AccountType('Premium'), 1).bankCharge).to.equal(14.5);
        expect(new Account(new AccountType('Non-premium'), 1).bankCharge).to.equal(6.25);
    });

    it('has no overdraftCharge when no overdrawn for non premium', () => {
        expect(new Account(new AccountType('Non-premium'), 0).overdraftCharge()).to.equal(0);
    });

   it('has a basis overdraftCharge even when no overdrawn for non premium', () => {
        expect(new Account(new AccountType('Premium'), 0).overdraftCharge()).to.equal(10);
    });
});
