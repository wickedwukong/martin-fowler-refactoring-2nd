export function temperatureAlerts(aRoom, aPlan) {
    const alerts = [];
    if (!aPlan.withinRange(aRoom.daysTempRange)) {
        alerts.push("room temperature went outside range");
    }

    return alerts
}


export class HeatingPlan {
    constructor(temperatureRange) {
        this._temperatureRange = temperatureRange;
    }
    withinRange(aNumberRange) {
        return (aNumberRange.low >= this._temperatureRange.low) && (aNumberRange.high <= this._temperatureRange.high);
    }
}

