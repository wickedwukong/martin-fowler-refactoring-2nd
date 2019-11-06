import {expect} from 'chai';
import {createEmployee} from '../../src/chp11/ReplaceTypeCodewithSubclasses1'

describe('Employee', () => {
    it('create engineer', () => {
        const engineer = createEmployee("Tom", "engineer");

        expect(engineer.toString()).to.equal("Tom (engineer)");
    });

    it('create manager', () => {
        const engineer = createEmployee("Sarah", "manager");

        expect(engineer.toString()).to.equal("Sarah (manager)");
    });

    it('create salesman', () => {
        const engineer = createEmployee("David", "salesman");

        expect(engineer.toString()).to.equal("David (salesman)");
    });

    it('throw error for invalid employee code', () => {
        expect(function(){ createEmployee("David", "invalid code")}).to.throw("Employee cannot be of type invalid code");
    });

});
