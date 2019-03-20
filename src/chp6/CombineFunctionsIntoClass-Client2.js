import {acquireReading, Reading} from "./CombineFunctionsIntoClass";

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
export const taxableCharge =  aReading.taxableCharge;