// test/main.test.js
import { expect } from 'chai';

import Main from '../src/main';

describe('Main', () => {

    it('should be a class', () => {
        expect(new Main()).to.not.equal(undefined);
    });

});
