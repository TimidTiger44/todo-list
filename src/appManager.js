import { projectManager } from "./projectManager.js";
import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

function appManager() {

// initialze projectManager object
const manager = projectManager();
// create default project to add initial todos to
const defaultProject = createProject("Default", "General to-do's go here.");
manager.addProject(defaultProject);

let currentProject = defaultProject;

const addNewProject = (name, description) => {
    const newProject = createProject(name, description);
    manager.addProject(newProject);
};

const addTodoToCurrentProject = (name, description, dueDate, priority) => {
    const todoToAdd = createTodo(name, description, dueDate, priority);
    currentProject.addTodoItem(todoToAdd);
}

const setCurrentProject = (project) => {
    currentProject = project;
};

const getCurrentProject = () => {
    return currentProject;
};

const getAllProjects = () => {
    return manager.getProjects();
};

return {
    addNewProject,
    addTodoToCurrentProject,
    setCurrentProject,
    getCurrentProject,
    getAllProjects
}
};

export { appManager };