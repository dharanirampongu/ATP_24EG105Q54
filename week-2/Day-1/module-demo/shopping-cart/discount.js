// discount.js - Module for handling discounts and coupons  
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};
// Function to validate coupon code and calculate discount
function validateCoupon(couponCode, cartTotal, cartItems) {
  const coupon = coupons[couponCode];
  if (!coupon) return { valid: false, message: "Invalid coupon" };
  // Check minimum amount requirement
  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: "Minimum amount not met" };
  }
  // Check category eligibility if applicable
  if (coupon.category) {
    const hasCategory = cartItems.some(item => item.category === coupon.category);
    if (!hasCategory) {
      return { valid: false, message: "Category not eligible" };
    }
  }

  return { valid: true, message: "Coupon applied" };
}
// Function to calculate discount amount based on coupon type
function calculateDiscount(couponCode, cartTotal) {
  const coupon = coupons[couponCode];

  if (coupon.type === 'percentage') {
    return (cartTotal * coupon.value) / 100;
  } else if (coupon.type === 'flat') {
    return coupon.value;
  }

  return 0;
}
// Function to apply discount and return final total
function applyDiscount(cartTotal, couponCode, cartItems) {
  const validation = validateCoupon(couponCode, cartTotal, cartItems);

  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }
// If valid, calculate discount
  const discount = calculateDiscount(couponCode, cartTotal);

  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: "Discount applied successfully"
  };
}
// Exporting functions for use in other modules
export {validateCoupon,calculateDiscount,applyDiscount}