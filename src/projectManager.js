function projectManager(){
    let projects = [];

    const addProject = (project) => {
        projects.push(project);
    };

    const removeProject = (project) => {
        const index = projects.indexOf(project);
        if (index !== -1) {
            projects.splice(index, 1);
        }
    };

    const getProjects = () => projects;

    const toJSON = () => {
        return projects;
    };

    return {
        addProject,
        removeProject,
        getProjects, 
        toJSON
    }
}

export { projectManager };
