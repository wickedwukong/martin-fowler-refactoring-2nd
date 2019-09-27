export function temperatureAlerts(aRoom, aPlan) {
    const alerts = [];
    const low = aRoom.daysTempRange.low;
    const high = aRoom.daysTempRange.high;
    if (!aPlan.withinRange(low, high)) {
        alerts.push("room temperature went outside range");
    }

    return alerts
}


export class HeatingPlan {
    constructor(temperatureRange) {
        this._temperatureRange = temperatureRange;
    }

    withinRange(bottom, top) {
        return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
    }

    xxNEWwithinRange(aNumberRange) {
        return this.withinRange(aNumberRange.low, aNumberRange.high);
    }
}

