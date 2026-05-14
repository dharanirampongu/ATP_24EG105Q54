//Write a program to store the details of employees in an array of objects. Each employee object should have properties like employee number, name, salary, and department. Perform the following operations:
//a) Filter the employees based on a specific department.
//b) Map the employees to create a new array of their net salaries (salary after deducting 1% tax).
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//filter()
let res=movies.filter(m=>m.genre=="Sci-Fi")
console.log(res)
//map()
let res1=movies.map(m=>`${m.title=="Inception"} (${m.rating==8.8})`)
console.log(res1)
//reduce()
let res2=movies.reduce((m,sum)=>sum+m.rating)/movies.length
console.log(res2)
//find()
let res3=movies.find(m=>m.title=="Joker")
console.log(res3)
//findIndex()   
let res4=movies.findIndex(m=>m.title=="Avengers")
console.log(res4)