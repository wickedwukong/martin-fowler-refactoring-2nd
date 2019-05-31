import {expect} from 'chai';
import {customerName, Customer, Site, billingPlan, changeBillingPlan} from '../../src/chp10/IntroduceSpecialCase'

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

describe('changeBillingPlan', () => {
    it('do nothing to customer billing plan is customer is "unknown" ', () => {
        expect(changeBillingPlan("unknown")).to.equal("unknown");
    });
    it('change customer billing plan when customer is not "unknown" ', () => {
        expect(changeBillingPlan(new Customer("Ava", "Annual"), "basic").billingPlan).to.equal("basic");
    });
});
