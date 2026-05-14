import { getProductById, checkStock } from './product.js';
// cart.js - Module for managing the shopping cart
let cartItems = [];
// Functions to manage cart operations
function addToCart(productId, quantity) {
  const product = getProductById(productId);
// Check if product exists
  if (!product) return "Product not found";

  //  Check stock availability
  if (!checkStock(productId, quantity)) {
    return "Insufficient stock";
  }

  // Check if item already in cart
  const existingItem = cartItems.find(item => item.productId === productId);

  // If item exists, update quantity, otherwise add new item
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return "Item added to cart";
}
// Function to remove item from cart
function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return "Item removed from cart";
}
// Function to update item quantity in cart
function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) {
    return "Insufficient stock to update quantity";
  }
  // Find the item in the cart
  const item = cartItems.find(i => i.productId === productId);
  if (!item) return "Item not found in cart";

  item.quantity = newQuantity;
  return "Quantity updated";
}
// Function to get cart items with product details
function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity,
      totalPrice: product.price * item.quantity
    };
  });
}
// Function to calculate total price of items in cart
function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.totalPrice, 0);
}
// Function to clear the cart
function clearCart() {
  cartItems = [];
}
// Exporting functions for use in other modules
export {addToCart,removeFromCart,updateQuantity,getCartItems,getCartTotal,clearCart}