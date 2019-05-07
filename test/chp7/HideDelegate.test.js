import {expect} from 'chai';
import {Person, Department} from '../../src/chp7/HideDelegate'

describe('Person', () => {
    const aPerson = new Person("Tom", new Department("aManager", "999"));

    it('report tracking information', () => {
        expect(aPerson.name).to.eql("Tom");
        expect(aPerson.manager).to.eql("aManager");
        expect(aPerson.chargeCode).to.eql("999");
    });
});
