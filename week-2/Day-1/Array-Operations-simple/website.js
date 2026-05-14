// Array operations on website.js
// 1. Filter the courses that have length greater than or equal to 5.
// 2. Map the courses to create a new array of course names in uppercase.
// 3. Reduce the courses to create a single string of course names separated by " | ".
// 4. Find the course that is exactly "react".
// 5. Find the index of the course that is exactly "node".
const courses = ["javascript", "react", "node", "mongodb", "express"]
//filter()
let res=courses.filter(c=>c.length>=5)
console.log(res)
//map()
let res1=courses.map(c=>c.toUpperCase())
console.log(res1)
//reduce()
let res2=courses.map(c=>c.toUpperCase()).reduce((res2, c) => res2 + " | " + c )
console.log(res2)
//find()
let res3=courses.find(c=>c=="react")
console.log(res3)
//findIndex()
let res4=courses.findIndex(c=>c=="node")
console.log(res4)