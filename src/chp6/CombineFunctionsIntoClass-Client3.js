import {acquireReading, baseRate, Reading} from "./CombineFunctionsIntoClass";

const rawReading = acquireReading();
const aReading = new Reading(rawReading);

function calculateBaseCharge(aReading) {
    return  baseRate(aReading.month, aReading.year) * aReading.quantity;
}

export const basicChargeAmount = calculateBaseCharge(aReading);
