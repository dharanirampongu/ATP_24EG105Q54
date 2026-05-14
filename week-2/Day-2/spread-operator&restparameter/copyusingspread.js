let fruits=["apple","banana"]
// let copyFruits=fruits; // Shallow copy (reference copy)
let copyFruits=[...fruits,"orange"]
console.log(fruits)
console.log(copyFruits)