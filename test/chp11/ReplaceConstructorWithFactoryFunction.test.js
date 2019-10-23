import {expect} from 'chai';
import {Employee} from '../../src/chp11/ReplaceConstructorWithFactoryFunction'

describe('Employee', () => {
    it('create a Manager with the employee name ', () => {
        const candidate = new Employee("Sarah", "M");

        expect(candidate.name ).to.equal("Sarah");
        expect(candidate.type ).to.equal("Manager");
    });

    it('create an Engineer with the employee name ', () => {
        const candidate = new Employee("Chloe", "E");

        expect(candidate.name ).to.equal("Chloe");
        expect(candidate.type ).to.equal("Engineer");
    });
});
