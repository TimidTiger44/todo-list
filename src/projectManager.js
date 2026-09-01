function projectHandler(){
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

    return {
        addProject,
        removeProject,
        getProjects
    }
}

export { projectHandler };
