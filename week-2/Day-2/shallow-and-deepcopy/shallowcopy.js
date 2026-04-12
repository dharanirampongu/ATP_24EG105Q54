const user = {
      id: 101,
      name: "Ravi",
      preferences: {
        theme: "dark",
        language: "en"
    }
 };
 let copyUser={...user}
  console.log(user)
 user.name="riya"
 user.preferences.theme="light"
 console.log(user)
 console.log(copyUser)