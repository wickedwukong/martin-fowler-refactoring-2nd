export function acquireData(input) {
    const lines = input.split("\n");
    let firstLine = true;
    const result = [];
    let loopItems = lines;
    for (const line of loopItems) {
        if (firstLine) {
            firstLine = false;
            continue;
        }
        if (line.trim() === "") continue;
        const record = line.split(",");
        if (record[1].trim() === "India") {
            result.push({city: record[0].trim(), phone: record[2].trim()});
        }
    }
    return result;
}
