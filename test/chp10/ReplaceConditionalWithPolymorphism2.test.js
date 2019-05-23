import {expect} from 'chai';
import {rating} from '../../src/chp10/ReplaceConditionalWithPolymorphism2'

describe('rating`', () => {
    it('give a B', () => {
        const voyage = {zone: "west-indies", length: 10};
        const history = [
            {zone: "east-indies", profit:  5},
            {zone: "west-indies", profit: 15},
            {zone: "china",       profit: -2},
            {zone: "west-africa", profit:  7},
        ];

        expect(rating(voyage, history)).to.equal("B");
    });
});

