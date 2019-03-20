import {acquireReading, baseRate} from "./CombineFunctionsIntoClass";

const aReading = acquireReading();
const baseCharge = (baseRate(aReading.month, aReading.year) * aReading.quantity);

function taxThreshold(year) {
    return 0.1;
}

export const taxableCharge =  Math.max(0, baseCharge - taxThreshold(aReading.year));