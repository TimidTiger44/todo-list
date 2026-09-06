function createProject(name , description) {
    let todoList = [];

    const addTodoItem = (item) => {
        todoList.push(item);
    }

    const removeTodoItem = (item) => {
        const index = todoList.indexOf(item);
        if (index !== -1) {
            todoList.splice(index, 1);
        }
    }

    const toJSON = () => {
        return {
            name,
            description,
            todoList
        };
    };

    const getTodoList = () => [...todoList];

    return {
        name,
        description,
        addTodoItem,
        removeTodoItem,
        toJSON,
        getTodoList
    }
}

export { createProject };