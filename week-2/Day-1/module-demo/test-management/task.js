import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

let tasks = [];

// 1. Add new task
export function addTask(title, priority, dueDate) {
  // Validate using imported functions
  if (!validateTitle() && !validatePriority() && !validateDueDate()) {
    return "Invalid task";
  }
  //push taskObj to tasks array
  tasks.push({ title, priority, dueDate });

  // Return success/error message
  return true;
}

// 2. Get all tasks
export function getAllTasks() {
  // Return all tasks
  return tasks;
}