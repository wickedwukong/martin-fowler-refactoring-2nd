import {expect} from 'chai';
import {createBooking, createPremiumBooking, Booking} from '../../src/chp11/ReplaceSubClasswithDelegate1'

describe('Booking', () => {
    it('should have not talkBack on peak day and calculate base price for peak day', () => {
        const show = {
            talkback: true,
            price: 100
        };

        const peakDay = new Date(2019, 11, 29);
        const booking = new createBooking(show, peakDay);

        expect(booking.basePrice).to.equal(115);
        expect(booking.hasTalkback).to.equal(false);
    });

    it('should have talkBack on non-peak day and calculate base price for non-peak day', () => {
        const show = {
            talkback: true,
            price: 100
        };

        const nonPeakDay = new Date(2019, 1, 30);
        const booking = new createBooking(show, nonPeakDay);

        expect(booking.basePrice).to.equal(100);
        expect(booking.hasTalkback).to.equal(true);
    });
})

describe('PremiumBooking', () => {
    it('should have talkBack on peak day and calculate base price for peak day', () => {
        const show = {
            talkback: true,
            price: 100
        };

        const peakDay = new Date(2019, 11, 29);
        const extras = {premiumFee: 1000};

        const premiumBooking = new createPremiumBooking(show, peakDay, extras);

        expect(premiumBooking.basePrice).to.equal(1115);
        expect(premiumBooking.hasTalkback).to.equal(true);
    });

    it('should have talkBack on non-peak day and calculate base price for non-peak day', () => {
        const show = {
            talkback: true,
            price: 100
        };

        const nonPeakDay = new Date(2019, 1, 30);
        const extras = {premiumFee: 2000};

        const booking = new createPremiumBooking(show, nonPeakDay, extras);

        expect(booking.basePrice).to.equal(2100);
        expect(booking.hasTalkback).to.equal(true);
    });
});
