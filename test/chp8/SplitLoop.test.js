import {expect} from 'chai';
import {reportYoungestAgeAndTotalSalary} from '../../src/chp8/SplitLoop'

const people = [{
    age: "30",
    salary: 2000
    },
    {
        age: "25",
        salary: 2000
    },
    {
        age: "31",
        salary: 2000
    }];

describe('reportYoungestAgeAndTotalSalary', () => {
    it('report youngest age and total salary', () => {
        expect(reportYoungestAgeAndTotalSalary(people)).to.equal("youngestAge: 25, totalSalary: 6000");
    });
});
