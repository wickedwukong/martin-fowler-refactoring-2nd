export function temperatureAlerts(aRoom, aPlan) {
    const alerts = [];
    if (!aPlan.xxNEWwithinRange(aRoom.daysTempRange)) {
        alerts.push("room temperature went outside range");
    }

    return alerts
}


export class HeatingPlan {
    constructor(temperatureRange) {
        this._temperatureRange = temperatureRange;
    }
    xxNEWwithinRange(aNumberRange) {
        return (aNumberRange.low >= this._temperatureRange.low) && (aNumberRange.high <= this._temperatureRange.high);
    }
}

