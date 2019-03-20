import {acquireReading, baseRate} from "./CombineFunctionsIntoClass";

const aReading = acquireReading();

function calculateBaseCharge(aReading) {
    return  baseRate(aReading.month, aReading.year) * aReading.quantity;
}

export const basicChargeAmount = calculateBaseCharge(aReading);
