export class Booking {
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }

    get isPeakDay() {
        return this._date.getTime() === new Date(2019, 11, 29).getTime();
    }

    get hasTalkback() {
        return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }

    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
}


export class PremiumBooking extends Booking {
    constructor(show, date, extras) {
        super(show, date);
        this._extras = extras;
    }

    get hasTalkback() {
        return this._show.hasOwnProperty('talkback');
    }

    get basePrice() {
        return Math.round(super.basePrice + this._extras.premiumFee);
    }

    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
    }
}

