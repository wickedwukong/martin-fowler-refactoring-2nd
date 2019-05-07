export class TrackingInformation {
    constructor(trackingNumber, shippingCompany) {
        this._trackingNumber = trackingNumber;
        this._shippingCompany = shippingCompany;
    }

    get shippingCompany() {
        return this._shippingCompany;
    }

    set shippingCompany(arg) {
        this._shippingCompany = arg;
    }

    get trackingNumber() {
        return this._trackingNumber;
    }

    set trackingNumber(arg) {
        this._trackingNumber = arg;
    }

    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}


export class Shipment {

    constructor(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }

    get trackingInfo() {
        return this._trackingInformation.display;
    }

    get trackingInformation() {
        return this._trackingInformation;
    }

    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }

    set shippingCompany(aShippingCompany) {
        this._trackingInformation.shippingCompany = aShippingCompany;
    }
}