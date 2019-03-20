import { expect } from 'chai';
import {basicChargeAmount} from '../../src/chp6/CombineFunctionsIntoClass-Client3'

describe('CombineFunctionsIntoClass-Client3.js', () => {
    it('basicChargeAmount', () => {
        expect(basicChargeAmount).to.equal(1);
    });

});
