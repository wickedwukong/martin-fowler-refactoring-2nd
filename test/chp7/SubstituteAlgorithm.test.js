import {expect} from 'chai';
import {foundPerson} from '../../src/chp7/SubstituteAlgorithm'

describe('foundPerson', () => {
    it('can find candidates', () => {
        expect(foundPerson(["John"])).to.equal("John");
        expect(foundPerson(["Don", "John"])).to.equal("Don");
        expect(foundPerson(["Kent", "Don", "John"])).to.equal("Kent");
        expect(foundPerson(["Lisa", "Don", "Tom"])).to.equal("Don");
    });

    it('report no candidate is found', () => {
        expect(foundPerson(["Tom", "Chloe"])).to.equal("");
    });
});
