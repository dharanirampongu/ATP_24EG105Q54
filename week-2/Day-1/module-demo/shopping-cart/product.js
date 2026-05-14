// product.js - Module for managing products and inventory
const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];
// Functions to manage products and inventory
function getProductById(id)
{
    return products.find(item=>item.id===id)
}
//  Function to get all products
function getAllProducts()
{
    return products
}
// Function to get products by category
function getProductsByCategory(category)
{
    return products.filter(item=>item.category==category)
}
// Function to search products by name
function searchProducts(query)
{
    return products.filter(item=>item.name.toLowerCase().includes(query.toLowerCase()))
}
// Function to check stock availability
function checkStock(productId,quantity)
{
    const product=getProductById(productId)
    return product && product.stock>=quantity
}
// Function to reduce stock after purchase
function reduceStock(productId,quantity)
{
    const product=getProductById(productId,quantity)
    if(product)
    {
        product.stock-=quantity
    }
}
// Exporting functions for use in other modules
export {getProductById,getAllProducts,getProductsByCategory,searchProducts,checkStock,reduceStock}