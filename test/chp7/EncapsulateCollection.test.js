import { expect } from 'chai';
import {Person, Course} from '../../src/chp7/EncapsulateCollection'

describe('Person', () => {
    it('can set courses', () => {
        const person = new Person("Xuemin");
        const courses = [new Course("Math", true)];

        person.courses = courses;
        expect(person.name).to.equal("Xuemin");
        expect(person.courses).to.equal(courses);
    });
});
