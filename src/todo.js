import { addDays, isAfter, isWithinInterval } from 'date-fns';

function createTodo(title, description, rawDueDate, priority) {
    const dueDate = new Date(rawDueDate);
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
        rawDueDate,
        get priority() {
            return todoPriority;
        },
        get completed() {
            return completed
        },
        changePriority,
        isDueThisWeek,
        isPassedDue
    };

}

export { createTodo };

