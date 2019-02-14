import { expect } from 'chai';
import {isDeliveryFree} from '../../src/chp6/InLineVarialbe'

describe('isDeliveryFree', () => {
    it('should have free delivery for order price over 1000', () => {
        const aFreeDeliveryOrder = {
            basePrice: 1001,
        };

        expect(isDeliveryFree(aFreeDeliveryOrder)).to.equal(true);
    });

    it('should not have free delivery for order price equal or less than 1000', () => {
        const anOrderOfPrice1000 = {
            basePrice: 1000,
        };

        const anOrderOfPriceLessThan1000 = {
            basePrice: 1000,
        };

        expect(isDeliveryFree(anOrderOfPrice1000)).to.equal(false);
        expect(isDeliveryFree(anOrderOfPriceLessThan1000)).to.equal(false);
    });

});
