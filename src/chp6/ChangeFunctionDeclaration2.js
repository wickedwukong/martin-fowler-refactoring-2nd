export default class Book {
    constructor() {
        this._reservations = [];
    }

    addReservation(customer) {
        this._reservations.push(customer);
    }

    hasReservation(customer) {
        return this._reservations.some(reservedCustomer => reservedCustomer.id === customer.id);
    }
}