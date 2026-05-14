// payment.js - Module for processing payments and handling checkout
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
// payment.js - Module for processing payments and handling checkout
function validatePaymentMethod(method) {
  return ['card', 'upi', 'cod'].includes(method);
}
// Function to process payment and return order summary
function processPayment(paymentMethod, couponCode = null) {
  const items = getCartItems();
  let subtotal = getCartTotal();
  let discount = 0;
  let total = subtotal;
  // Validate payment method
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: 'failed', message: 'Invalid payment method' };
  }
  // Apply discount if coupon code is provided
  if (couponCode) {
    const discountResult = applyDiscount(subtotal, couponCode, items);
    discount = discountResult.discount;
    total = discountResult.finalTotal;
  }
  // Simulate payment processing (in real application, integrate with payment gateway)
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount,
    total,
    paymentMethod,
    status: 'success',
    message: 'Payment successful'
  };
}
// Helper function to generate unique order ID
function generateOrderId() {
  return 'ORD' + Date.now();
}
// Exporting functions for use in other modules
export {processPayment,validatePaymentMethod}