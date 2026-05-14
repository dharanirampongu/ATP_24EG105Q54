//Write a program to store the details of employees in an array of objects. Each employee object should have properties like employee number, name, salary, and department. Perform the following operations:
//a) Filter the employees based on a specific department.
//b) Map the employees to create a new array of their net salaries (salary after deducting 1% tax).
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//filter()
let res=employees.filter(emp=>emp.department=="IT")
console.log(res)
//map()
let res1=employees.map((emp,netSalary) => 
  netSalary = emp.salary + (emp.salary*0.01)
);
console.log(res1)
//reduce()
let res2=employees.reduce((total, emp) => total + emp.salary, 0)
console.log(res2)
//find()
let res3=employees.find(emp=>emp.salary==30000)
console.log(res3)
//findIndex()
let res4=employees.findIndex(emp=>emp.name=="Neha")
console.log(res4)