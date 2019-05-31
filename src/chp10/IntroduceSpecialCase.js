export class Site {
    constructor(customer) {
        this._customer = customer;
    }

    get customer() {
        return this._customer;
    }
}


export class Customer {
    constructor(name, billingPlan) {
        this._name = name;
        this._billingPlan = billingPlan;
    }

    get name() {
        return this._name;
    }

    get billingPlan() {
        return this._billingPlan
    }

    set billingPlan(arg) {
        this._billingPlan = arg;
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


//client 2

const registry = {
    billingPlans: {
        basic: "basic"
    }
};

export function billingPlan(aCustomer) {
    const plan = (aCustomer === "unknown") ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;

    return plan;
}


//client 3
export function changeBillingPlan(aCustomer, newPlan) {
    if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan;
    return aCustomer;
}

