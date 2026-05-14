//Write a program to store the details of employees in an array of objects. Each employee object should have properties like employee number, name, and marks (an array of marks). Perform the following operations:
//a) Add a new employee to the array.
//b) Remove an employee from the array based on the employee number.
//c) Update the marks of an employee based on the employee number.  
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
//print the details of all employees
console.log(employees)
//  a) Add a new employee to the array. 
const newemp={empno:6,name:"Raju",marks:[15,25,35]};
//add the new employee to the array at index 1
employees.splice(1,0,newemp);
console.log(employees)
// b) Remove an employee from the array based on the employee number.
const index=employees.findIndex(e=>e.name=="Raju");
if(index!=-1)
    employees.splice(index,1);//remove the employee at the found index
console.log(employees)
// c) Update the marks of an employee based on the employee number.
const sneha=employees.find(e=>e.name=="Sneha");
if(sneha)
    sneha.marks[sneha.marks.length-1]=75;//update the last mark of the employee to 75
console.log(employees)
