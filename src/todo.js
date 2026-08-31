import { addDays, isAfter, isWithinInterval } from 'date-fns';

function createTodo(title, description, dueDate, priority) {
    let todoPriority = priority;
    let completed = false;

    const toggleCompleted = () => {
        completed = !completed;
    }

    const changePriority = (newPriority) => {
        if (["low", "medium", "high"].includes(newPriority)){
            todoPriority = newPriority;
        }
    }

    const isPassedDue = () => {
        // create date-fns object with current date
        let currentDate = new Date();

        return isAfter(currentDate, dueDate);
    }

    const isDueThisWeek = () => {
        const currentDate = new Date();
        const weekFromNow = addDays(currentDate, 7);

        return isWithinInterval(dueDate, {
            start: currentDate,
            end: weekFromNow
        });
    };

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

