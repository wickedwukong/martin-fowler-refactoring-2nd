export function price(order) {
    let basePrice = order.quantity * order.itemPrice;
    let quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    let shippingCost = Math.min(basePrice * 0.1, 100);
    return basePrice - quantityDiscount + shippingCost;
}