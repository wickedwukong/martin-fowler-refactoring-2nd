import {expect} from 'chai';
import {Person} from '../../src/chp7/ExtractClass'

describe('Person', () => {
    it('returns name, area code, number and telephone number correctly', () => {
        const aPerson = new Person("Xuemin", "020", "12345678");
        expect(aPerson.name).to.equal("Xuemin");
        expect(aPerson.officeAreaCode).to.equal("020");
        expect(aPerson.officeNumber).to.equal("12345678");
        expect(aPerson.telephoneNumber).to.equal("(020) 12345678");
    });
});
