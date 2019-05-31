import {expect} from 'chai';
import {customerName, Customer, Site, billingPlan} from '../../src/chp10/IntroduceSpecialCase'

describe('customerName', () => {
    it('should give "occupant" if customer is "unknown" ', () => {
        expect(customerName(new Site("unknown"))).to.equal("occupant");
    });
    it('should give customer name if customer is not "unknown" ', () => {
        expect(customerName(new Site(new Customer("Ava")))).to.equal("Ava");
    });
});

describe('billingPlan', () => {
    it('should give basic billing plan', () => {
        expect(billingPlan("unknown")).to.equal("basic");
    });
    it('should give customer billing plan when it is not "unknown" ', () => {
        expect(billingPlan(new Customer("Ava", "Annual"))).to.equal("Annual");
    });
});
