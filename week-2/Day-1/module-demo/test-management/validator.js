function validateTitle(title) {
  // Your code here
  if (!title) {
    return "Title required";
  }
  if (title.length <= 3) {
    return "Min 3 char required";
  }
  return true;
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  // Your code here
  const priorities=['LOW',"MEDIUM","HIGH"]
  let result=priorities.includes(priority)

  if(result===false){
    return "Invalid priority"
  }
  return true
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
  // Your code here
  let dueDate=new Date('2024-10-20') //yyyy-mm-dd
  let today=new Date()
  if(dueDate>today){
    return "Invalid duedate"
  }
  return true;
}

// Exporting functions for use in other modules
export {validateTitle,validatePriority,validateDueDate}