function applyingShippingCost(shippingMethod, quantity, discount, priceData) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;

    const shippingCost = quantity * shippingPerCase;

    return priceData.basePrice - discount + shippingCost;
}

export function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;

    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;

    const priceData = {basePrice: basePrice};

    const price = applyingShippingCost(shippingMethod, quantity, discount, priceData);

    return price;
}