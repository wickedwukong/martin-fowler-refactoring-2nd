import { expect } from 'chai';
import {defaultOwner} from '../../src/chp6/Encapsulatevariable1'

describe('defaultOwner', () => {
    it('is Martin Folwer', () => {
        let spaceship = {};
        spaceship.owner = defaultOwner;

        expect(spaceship.owner.firstName).to.equal("Martin");
        expect(spaceship.owner.lastName).to.equal("Fowler");
    });

});
