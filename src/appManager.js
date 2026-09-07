import { projectManager } from "./projectManager.js";
import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

function appManager() {

// initialze projectManager object
const manager = projectManager();
// create default project to add initial todos to

// helper function to save typing
const save = () => {
    localStorage.setItem("projects", JSON.stringify(manager));
    };

const savedProjects = localStorage.getItem("projects");

if (savedProjects) {
    const parsedProjects = JSON.parse(savedProjects);
    parsedProjects.forEach(p => {
        const project = createProject(p.name, p.description);
        // don't technically need the conditional, but want to keep anyways
        if (p.todolist && p.todoList.length > 0) {
            p.todoList.forEach(todo => {
                const todoToAppend = createTodo(todo.title, todo.description, todo.dueDate, todo.priority);

                if (todo.completed) {
                    todoToAppend.toggleCompleted();
                }

                project.addTodoItem(todoToAppend);
            })
        }
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

const removeProject = (project) => {
    manager.removeProject(project);

    if (currentProject === project) {
        currentProject = manager.getProjects()[0];
    }

    save();
};


const addTodoToCurrentProject = (name, description, dueDate, priority) => {
    const todoToAdd = createTodo(name, description, dueDate, priority);
    currentProject.addTodoItem(todoToAdd);
    save();
};

const removeTodoFromCurrentProject = (todo) => {
    currentProject.removeTodoItem(todo);
    save();
}


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