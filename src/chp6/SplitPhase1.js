function applyingShippingCost(basePrice, shippingMethod, quantity, discount) {
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;

    const shippingCost = quantity * shippingPerCase;

    return basePrice - discount + shippingCost;
}

export function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;

    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;

    const price = applyingShippingCost(basePrice, shippingMethod, quantity, discount);

    return price;
}