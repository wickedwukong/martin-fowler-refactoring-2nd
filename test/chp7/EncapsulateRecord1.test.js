import { expect } from 'chai';
import {organization} from '../../src/chp7/EncapsulateRecord1'

describe('organization', () => {
    it('should give right name', () => {
        expect(organization.name).to.equal('Acme Gooseberries');
    });

    it('should set name', () => {
        organization.name = 'new name';
        expect(organization.name).to.equal('new name');
    });

});
