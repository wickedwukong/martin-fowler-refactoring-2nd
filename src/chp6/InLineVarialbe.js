export function isDeliveryFree(anOrder) {
    let basePrice = anOrder.basePrice;
    return (basePrice > 1000);
}
