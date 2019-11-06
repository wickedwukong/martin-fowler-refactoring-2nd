import {expect} from 'chai';
import {Employee} from '../../src/chp11/ReplaceTypeCodewithSubclasses1'

describe('Employee', () => {
    it('create engineer', () => {
        const engineer = new Employee("Tom", "engineer");

        expect(engineer.toString()).to.equal("Tom (engineer)");
    });

    it('create manager', () => {
        const engineer = new Employee("Sarah", "manager");

        expect(engineer.toString()).to.equal("Sarah (manager)");
    });

    it('create salesman', () => {
        const engineer = new Employee("David", "salesman");

        expect(engineer.toString()).to.equal("David (salesman)");
    });

    it('throw error for invalid employee code', () => {
        expect(function(){ new Employee("David", "invalid code")}).to.throw("Employee cannot be of type invalid code");
    });

});
