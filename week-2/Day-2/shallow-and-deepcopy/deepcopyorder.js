// Deep copy using structuredClone() method
const order = {
   orderId: "ORD1001",
   customer: {
   name: "Anita",
   address: {
       city: "Hyderabad",
       pincode: 500085
    }
  },
    items: [
   { product: "Laptop", price: 70000 }
   ]
  };
  // Deep copy using structuredClone() method
  let copyOrder=structuredClone(order)
  // Modifying the copy
  copyOrder.customer.address.city="Mahabubabad"
  copyOrder.items[0].price=65000
  console.log(order)
  console.log(copyOrder)