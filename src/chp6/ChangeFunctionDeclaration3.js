function xxxNewInNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

export function inNewEngland(aCustomer) {
    const stateCode = aCustomer.address.state;
    return xxxNewInNewEngland(stateCode);
}



