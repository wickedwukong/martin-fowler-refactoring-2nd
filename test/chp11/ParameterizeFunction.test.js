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

    it('should be zero when usage is less than zero', () => {
        expect(baseCharge(-1)).to.eql({
                currency: "$",
                currencyName: "USD",
                value: 0
            }
        );
    });

    it('bottom band', () => {
        expect(baseCharge(50)).to.eql({
                currency: "$",
                currencyName: "USD",
                value: 1.5
            }
        );
    });

    it('middle band', () => {
        expect(baseCharge(100)).to.eql({
                currency: "$",
                currencyName: "USD",
                value: 3
            }
        );
    });

    it('top band', () => {
        expect(baseCharge(200)).to.eql({
                currency: "$",
                currencyName: "USD",
                value: 8
            }
        );
    });

});
