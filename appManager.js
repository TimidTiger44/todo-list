import { projectManager } from "./src/projectManager.js";
import { createProject } from "./src/project.js";
import { createTodo } from "./src/todo.js";

function appManager() {

const manager = projectManager();
const defaultProject = createProject("Default", "General to-do's go here.");

const todo1 = createTodo(
    "Clean laundry", 
    "Wash laundry on hot cycle", 
    "10/16/2027", 
    "medium"
);

console.log(todo1);
defaultProject.addTodoItem(todo1);
console.log(defaultProject.getTodoList());

};

export { appManager };