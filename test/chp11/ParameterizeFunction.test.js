import {expect} from 'chai';
import {baseCharge} from '../../src/chp11/ParameterizeFunction'

describe('baseCharge', () => {
    it('should be zero when usage is zero', () => {
        expect(baseCharge(0)).to.eql({
                currency: "$",
                currencyName: "USD",
                value: 0
            }
        );
    });

});
