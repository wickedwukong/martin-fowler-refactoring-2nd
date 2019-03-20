import {acquireReading, Reading} from "./CombineFunctionsIntoClass";

const rawReading = acquireReading();
const aReading = new Reading(rawReading);


function taxThreshold(year) {
    return 0.1;
}

export const taxableCharge =  Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));