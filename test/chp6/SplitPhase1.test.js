import { expect } from 'chai';
import {priceOrder} from '../../src/chp6/SplitPhase1'

describe('priceOrder', () => {
    const product = {
        basePrice: 10,
        discountRate: 0.1,
        discountThreshold: 10
    };

    const shippingMethod = {
        discountThreshold: 20,
        feePerCase: 5,
        discountedFee: 3
    };

    it('should price an order with discount and shipping cost applied', () => {
        expect(priceOrder(product, 5, shippingMethod)).to.equal(65);
    });

});
