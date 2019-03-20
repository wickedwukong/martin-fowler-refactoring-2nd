import { expect } from 'chai';
import {baseCharge} from '../../src/chp6/CombineFunctionsIntoClass-Client1'

describe('CombineFunctionsIntoClass-Client1.js', () => {
    it('baseCharge', () => {
        expect(baseCharge).to.equal(1);
    });

});
