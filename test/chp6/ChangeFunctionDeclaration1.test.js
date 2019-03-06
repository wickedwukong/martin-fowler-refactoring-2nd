import { expect } from 'chai';
import {circumference} from '../../src/chp6/ChangeFunctionDeclaration1'

describe('circumference', () => {
    it('should calculate circumference given a radius', () => {
        expect(circumference(100)).to.equal(628.3185307179587);
    });

});
