export function acquireData(input) {
    const lines = input.split("\n");
    const result = [];
    let loopItems = lines.splice(1)
        .filter(line => line.trim() !== "")
        .map(line => line.split(","))
        .filter(lineItems => lineItems[1].trim() === "India");
    
    for (const line of loopItems) {
        const record = line;
            result.push({city: record[0].trim(), phone: record[2].trim()});
    }
    return result;
}
