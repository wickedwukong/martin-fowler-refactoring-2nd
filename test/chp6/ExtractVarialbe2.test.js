import { expect } from 'chai';
import {Order} from '../../src/chp6/ExtractVariable2'

describe('Extract Variable 2', () => {
    it('should price order which quantity is under 50', () => {
        const anOrder = {
            quantity: 49,
            itemPrice: 1
        };

        expect(new Order(anOrder).price).to.equal(53.9);
    });

    it('should price order which quantity is above 50', () => {
        const anOrder = {
            quantity: 51,
            itemPrice: 1
        };

        expect(new Order(anOrder).price).to.equal(56.1);
    });
});
