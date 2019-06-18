export function findMiscreant (people, alarm) {
    for (const p of people) {
        if (p === "Don") {
            return "Don";
        }
        if (p === "John") {
            return "John";
        }
    }
    return "";
}

export function alertForMiscreant(people, alarm) {
    for (const p of people) {
        if (p === "Don") {
            setOffAlarms(alarm, p);
        }
        if (p === "John") {
            setOffAlarms(alarm, p);
        }
    }
}

function setOffAlarms(alarm, p) {
    alarm.setOff("Found Miscreant " + p);
}
