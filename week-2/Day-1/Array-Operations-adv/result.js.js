// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//filter()
let result=students.filter(stu =>stu.marks>=40)
console.log("Students passed:",result)
//map()
let result2=students.map((stu)=>{
  if(stu.marks>=90)
    return "A"
  else if(stu.marks>=75)
    return "B" 
  else if(stu.marks>=60)
    return "C"
  else
    return "D"
})
console.log(result2)
//reduce()
let result3=students.reduce((sum,stu)=>stu.marks+sum,0)/students.length
console.log(result3)
//find()
let result4=students.find(stu=>stu.marks==92)
console.log(result4)
//findIndex()
let result5=students.findIndex(stu=>stu.name=="Kiran")
console.log(result5)