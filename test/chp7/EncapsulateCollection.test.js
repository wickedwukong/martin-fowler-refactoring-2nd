import {expect} from 'chai';
import {Person, Course} from '../../src/chp7/EncapsulateCollection'

describe('Person', () => {
    it('can set courses', () => {
        const aPerson = new Person("Xuemin");
        const courses = [new Course("Math", true)];

        aPerson.courses = courses;
        expect(aPerson.name).to.equal("Xuemin");
        expect(aPerson.courses).to.eql(courses);
    });

    it('can set courses', () => {
        const aPerson = new Person("Xuemin");

        aPerson.courses.push(new Course("Math", false));
        aPerson.courses.push(new Course("Photography", false));

        expect(aPerson.name).to.equal("Xuemin");
        expect(aPerson.courses).to.eql([new Course("Math", false), new Course("Photography", false)]);
    });
});
