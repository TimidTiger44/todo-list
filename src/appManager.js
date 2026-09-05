import { projectManager } from "./projectManager.js";
import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

function appManager() {

// initialze projectManager object
const manager = projectManager();
// create default project to add initial todos to

// helper function to save typing
const save = () => {
    localStorage.setItem("projects", JSON.stringify(manager.getProjects()));
    };

const savedProjects = localStorage.getItem("projects");

if (savedProjects) {
    const parsedProjects = JSON.parse(savedProjects);
    parsedProjects.forEach(p => {
        const project = createProject(p.name, p.description);
        manager.addProject(project);
    });
} else {
    const defaultProject = createProject("Default", "General to-do's go here.");
    manager.addProject(defaultProject);
    save();
}


let currentProject = manager.getProjects()[0];

const addNewProject = (name, description) => {
    const newProject = createProject(name, description);
    manager.addProject(newProject);
    save();
};

const addTodoToCurrentProject = (name, description, dueDate, priority) => {
    const todoToAdd = createTodo(name, description, dueDate, priority);
    currentProject.addTodoItem(todoToAdd);
    save();
};

const setCurrentProject = (project) => {
    currentProject = project;
};

const getCurrentProject = () => currentProject;
const getAllProjects = () => manager.getProjects();

return {
    addNewProject,
    addTodoToCurrentProject,
    setCurrentProject,
    getCurrentProject,
    getAllProjects
}
};

export { appManager };