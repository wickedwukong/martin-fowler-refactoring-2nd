import { expect } from 'chai';
import {circum} from '../../src/chp6/ChangeFunctionDeclaration1'

describe('Circum', () => {
    it('should calculate circumference given a radius', () => {
        expect(circum(100)).to.equal(628.3185307179587);
    });

});
