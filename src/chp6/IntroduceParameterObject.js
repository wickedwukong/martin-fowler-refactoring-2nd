export function readingsOutsideRange(station, min, max) {
    return station.readings
        .filter(r => r.temp < min || r.temp > max);
}