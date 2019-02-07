export function price(order) {
    //price is base price - quantity discount + shipping
    let basePrice = order.quantity * order.itemPrice;
    let quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    return basePrice - quantityDiscount +
        Math.min(basePrice * 0.1, 100);
}