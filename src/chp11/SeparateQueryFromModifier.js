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
    const miscreant = findMiscreant(people);
    if (miscreant !== "") setOffAlarms(alarm, miscreant);
}

function setOffAlarms(alarm, p) {
    alarm.setOff("Found Miscreant " + p);
}
