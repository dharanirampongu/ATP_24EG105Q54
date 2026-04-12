import {addTask,getAllTasks} from './task.js'

//add a task
addTask("eating","HIGH",'2024-12-12')
addTask("sleeping","HIGH",'2024-12-12')
const tasks=getAllTasks()
console.log(tasks)