import {expect} from 'chai';
import {Person, Course} from '../../src/chp7/EncapsulateCollection'

describe('Person', () => {
    it('can set courses', () => {
        const aPerson = new Person("Xuemin");
        const courses = [new Course("Math", true)];

        courses.forEach(course => aPerson.addCourse(course));

        expect(aPerson.name).to.equal("Xuemin");
        expect(aPerson.courses).to.eql(courses);
    });

    it('can add courses', () => {
        const aPerson = new Person("Xuemin");

        aPerson.addCourse(new Course("Math", false));
        aPerson.addCourse(new Course("Photography", false));

        expect(aPerson.name).to.equal("Xuemin");
        expect(aPerson.courses).to.eql([new Course("Math", false), new Course("Photography", false)]);
    });

    it('remove courses', () => {
        const aPerson = new Person("Xuemin");

        let courseToBeRemoved = new Course("Math", false);
        aPerson.addCourse(courseToBeRemoved);
        aPerson.addCourse(new Course("Photography", false));

        aPerson.removeCourse(courseToBeRemoved);

        expect(aPerson.courses).to.eql([new Course("Photography", false)]);
    });

    it('internal courses can not be modified by the courses passed to setter', () => {
        const aPerson = new Person("Xuemin");
        const courses = [new Course("Math", true)];

        aPerson.courses = courses;

        courses.push(new Course("Photography", true));

        expect(aPerson.courses).to.eql([new Course("Math", true)]);
    });

    it('internal courses can not be modified by the courses obtained by getter', () => {
        const aPerson = new Person("Xuemin");

        aPerson.courses = [new Course("Math", true)];

        const coursesByGetter = aPerson.courses;

        coursesByGetter.push(new Course("Photography", true));

        expect(aPerson.courses).to.eql([new Course("Math", true)]);
    });
});
