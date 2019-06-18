import {expect} from 'chai';
import sinon from 'sinon';
import {findMiscreant} from '../../src/chp11/SeparateQueryFromModifier'

describe('findMiscreant', () => {
    it('find Don and set off alarm', () => {
        const alarm = { setOff: function (msg) {} };

        const mock = sinon.mock(alarm);
        mock.expects("setOff").once().withArgs("Found Miscreant Don");

        expect(findMiscreant(["Tom", "Helen", "Don"], alarm)).to.equal("Don");
        mock.verify();
    });

    it('find John and set off alarm', () => {
        const alarm = { setOff: function (msg) {} };

        const mock = sinon.mock(alarm);
        mock.expects("setOff").once().withArgs("Found Miscreant John");

        expect(findMiscreant(["Tom", "Helen", "John"], alarm)).to.equal("John");
        mock.verify();
    });
});
