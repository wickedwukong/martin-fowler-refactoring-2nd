export function acquireData(input) {
    const lines = input.split("\n");
    const result = [];
    let loopItems = lines.splice(1)
        .filter(line => line.trim() !== "")
        .map(line => line.split(","))
        .filter(lineItems => lineItems[1].trim() === "India")
        .map(lineItems => ({city: lineItems[0].trim(), phone: lineItems[2].trim()}));

    for (const line of loopItems) {
        const record = line;
        result.push(record);
    }
    return result;
}
