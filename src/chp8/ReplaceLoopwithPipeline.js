export function acquireData(input) {
    const lines = input.split("\n");
    const result = [];
    let loopItems = lines.splice(1);
    
    for (const line of loopItems) {
        if (line.trim() === "") continue;
        const record = line.split(",");
        if (record[1].trim() === "India") {
            result.push({city: record[0].trim(), phone: record[2].trim()});
        }
    }
    return result;
}
