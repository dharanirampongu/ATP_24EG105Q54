// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92

const marks = [78, 92, 35, 88, 40, 67]
let res=marks.filter(m=>m>=40)
console.log(res)
let res1=marks.map(m=>m+5)
console.log(res1)
let res2=marks.reduce((max, mark) => Math.max(max, mark), -Infinity)
console.log(res2)
let res4=marks.find(m=>m<=40)
console.log(res4)
let res5=marks.findIndex(m=>m==92)
console.log(res5)