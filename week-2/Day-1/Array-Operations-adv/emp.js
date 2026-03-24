const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
let res=employees.filter(emp=>emp.department=="IT")
console.log(res)
let res1=employees.map((emp,netSalary) => 
  netSalary = emp.salary + (emp.salary*0.01)
);
console.log(res1)
let res2=employees.reduce((total, emp) => total + emp.salary, 0)
console.log(res2)
let res3=employees.find(emp=>emp.salary==30000)
console.log(res3)
let res4=employees.findIndex(emp=>emp.name=="Neha")
console.log(res4)