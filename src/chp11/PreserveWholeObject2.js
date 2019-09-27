
export function temperatureAlerts(aRoom, aPlan) {
    const alerts = [];
    let tempRange = aRoom.daysTempRange;

    let isWithinRange = aPlan.withinRange(tempRange);
    if (!isWithinRange) {
        alerts.push("room temperature went outside range");
    }

    return alerts
}


export class HeatingPlan {
    constructor(temperatureRange) {
        this._temperatureRange = temperatureRange;
    }

    withinRange(tempRange) {
        return (tempRange.low >= this._temperatureRange.low) && (tempRange.high <= this._temperatureRange.high);
    }

}

