import { useState } from "react";

function Task({ task, onToggle }) {
    const [completed, setCompleted] = useState(false);

    const toggleTask = () => {
        setCompleted(!completed);
        ontoggle(task.id, !competed);
    };

    return (
        <div className={"task ${completed ? 'completed'}"}>
            <input type="checkbox" onChange={toggleTask} checked={completed} />
            <span>{task.name}</span>
        </div>
    );
}

export default Task;