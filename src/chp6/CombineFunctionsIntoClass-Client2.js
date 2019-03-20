import {acquireReading, Reading} from "./CombineFunctionsIntoClass";

const rawReading = acquireReading();
const aReading = new Reading(rawReading);


function taxThreshold(year) {
    return 0.1;
}

function taxableChargeFn(reading) {
    return Math.max(0, reading.baseCharge - taxThreshold(reading.year));
}

export const taxableCharge =  taxableChargeFn(aReading);