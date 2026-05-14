let user = {                                  
  name: "Ravi",
  city: "Hyderabad"
 };
 // let copyUser = user; // Shallow copy (reference copy)
 let copyUser=structuredClone(user)
copyUser={...user,age:25}
console.log(user)
console.log(copyUser)