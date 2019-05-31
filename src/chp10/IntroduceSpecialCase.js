export class Site {
    constructor(customer) {
        this._customer = customer;
    }

    get customer() {
        return this._customer;
    }
}


export class Customer {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get billingPlan() {
        //
    }

    set billingPlan(arg) {
        //
    }

    get paymentHistory() {
        //
    }

}


// client 1…

export function customerName(site) {
    const aCustomer = site.customer;
// ... lots of intervening code ...
    let customerName;
    if (aCustomer === "unknown") customerName = "occupant";
    else customerName = aCustomer.name;

    return customerName;
}
