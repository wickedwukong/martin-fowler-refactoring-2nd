import { expect } from 'chai';
import {getRawDataOfOrganization, organization} from '../../src/chp7/EncapsulateRecord1'

describe('organization', () => {
    it('should give right name', () => {
        expect(getRawDataOfOrganization().name).to.equal('Acme Gooseberries');
    });

    it('should set name', () => {
        let organization = getRawDataOfOrganization();
        organization.name = 'new name';
        expect(organization.name).to.equal('new name');
    });

});
