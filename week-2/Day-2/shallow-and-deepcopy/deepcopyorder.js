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
  let copyOrder=structuredClone(order)
  copyOrder.customer.address.city="Mahabubabad"
  copyOrder.items[0].price=65000
  console.log(order)
  console.log(copyOrder)