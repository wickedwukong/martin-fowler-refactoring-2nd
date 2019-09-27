
export function temperatureAlerts(aRoom, aPlan) {
    const alerts = [];
    let tempRange = aRoom.daysTempRange;

    let isWithinRange = aPlan.xxNEWwithinRange(tempRange);
    if (!isWithinRange) {
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

    xxNEWwithinRange(tempRange) {
        const low = tempRange.low;
        const high = tempRange.high;
        let isWithinRange = this.withinRange(low, high);
        return isWithinRange;
    }

}

