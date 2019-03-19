export function readingsOutsideRange(station, range) {
    return station.readings
        .filter(r => r.temp < range.min || r.temp > range.max);
}

export class NumberRange {
    constructor(min, max) {
        this._data = {min: min, max: max};
    }
    get min() {return this._data.min;}
    get max() {return this._data.max;}
}