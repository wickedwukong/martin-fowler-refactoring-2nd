function applyingShippingCost(shippingMethod, priceData) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;

    const shippingCost = priceData.quantity * shippingPerCase;

    return priceData.basePrice - priceData.discount + shippingCost;
}

function calculatePriceData(product, quantity) {
    const basePrice = product.basePrice * quantity;

    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;

    return {basePrice: basePrice, quantity: quantity, discount: discount};
}

export function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePriceData(product, quantity);

    return applyingShippingCost(shippingMethod, priceData);
}