export function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount =
        withinBand(usage, 0, 100) * 0.03
        + withinBand(usage, 100, 200) * 0.05
        + topBand(usage) * 0.07;
    return usd(amount);
}

function withinBand(usage, bottom, top) {
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function topBand(usage) {
    return usage > 200 ? usage - 200 : 0;
}

function usd(value) {
    return {
        currency: "$",
        currencyName: "USD",
        value: value
    }
}
