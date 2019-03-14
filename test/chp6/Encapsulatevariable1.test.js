import { expect } from 'chai';
import {getDefaultOwner, setDefaultOwner} from '../../src/chp6/Encapsulatevariable1'

describe('defaultOwner', () => {
    it('is Martin Folwer', () => {
        let spaceship = {};
        spaceship.owner = getDefaultOwner();

        expect(spaceship.owner.firstName).to.equal("Martin");
        expect(spaceship.owner.lastName).to.equal("Fowler");
    });

    it('can be set', () => {
        setDefaultOwner({firstName: "Mike", lastName: "Jackson"})

        let newDefaultUser = getDefaultOwner()

        expect(newDefaultUser.firstName).to.equal("Mike");
        expect(newDefaultUser.lastName).to.equal("Jackson");
    });

});
