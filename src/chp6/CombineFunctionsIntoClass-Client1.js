const aReading = acquireReading();

const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;