import {expect} from 'chai';
import {TrackingInformation, Shipment} from '../../src/chp7/InlineClass'

describe('Shipment', () => {
    it('report tracking information', () => {
        const aShipment = new Shipment(new TrackingInformation(999, "Maersk"));
        expect(aShipment.trackingInfo).to.eql("Maersk: 999");

        aShipment.trackingInformation.shippingCompany = "COSCO";
        expect(aShipment.trackingInfo).to.eql("COSCO: 999");
    });
});
