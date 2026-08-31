function createTodo(title, description, dueDate, priority) {
    let todoPriority = priority;

    const changePriority = (newPriority) => {
        if (["low", "medium", "high"].includes(newPriority)){
            todoPriority = newPriority;
        }
    }

    return {
        title,
        description,
        dueDate,
        get priority() {
            return todoPriority;
        },
        changePriority
    };

}

export { createTodo };

