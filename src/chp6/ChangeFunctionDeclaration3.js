export function inNewEngland(aCustomer) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}



