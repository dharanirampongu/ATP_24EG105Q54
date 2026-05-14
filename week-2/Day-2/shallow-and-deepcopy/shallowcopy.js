// Shallow copy using spread operator
const user = {
      id: 101,
      name: "Ravi",
      preferences: {
        theme: "dark",
        language: "en"
    }
 };
 // Shallow copy using spread operator
 let copyUser={...user}
  console.log(user)
  // Modifying the copy
 user.name="riya"
 user.preferences.theme="light"
 console.log(user)
 console.log(copyUser)