const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// filter()
const res = transactions.filter(t => t.type === "credit")
console.log(res)

// map() 
const res1 = transactions.map(t => t.amount)
console.log(res1)

// reduce()
const res2 = transactions.reduce((acc, t) => t.type === "credit" ? acc + t.amount : acc - t.amount, 0)
console.log(res2)

// find()
const res3 = transactions.find(t => t.type === "debit")
console.log(res3)

// findIndex()
const res4 = transactions.findIndex(t => t.amount === 10000)
console.log(res4)