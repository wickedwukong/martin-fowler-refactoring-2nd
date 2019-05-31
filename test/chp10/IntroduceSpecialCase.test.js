import {expect} from 'chai';
import {customerName, Customer, Site} from '../../src/chp10/IntroduceSpecialCase'

describe('customerName', () => {
    it('should give "occupant" if customer is "unknown" ', () => {
        expect(customerName(new Site("unknown"))).to.equal("occupant");
    });
    it('should give customer name if customer is not "unknown" ', () => {
        expect(customerName(new Site(new Customer("Ava")))).to.equal("Ava");
    });
});
