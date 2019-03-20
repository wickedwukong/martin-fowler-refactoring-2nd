import {acquireReading, baseRate} from "./CombineFunctionsIntoClass";

const aReading = acquireReading();

export const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;