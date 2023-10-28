import React, { useState } from "react";
import Task from "./Task";

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");

    const addTask = () => {
        if (newTask) {
            setTasks([...tasks, { id: Date.now(), name: newTask, completed: false}])
            setNewTasks("");
        }
    };

    const toggleTask = (taskId, completed) =>{
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed } : task 
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <div>
                <input 
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task"
                    />
                    <button onClick={addTask}>Add Task</button>
            </div>
        </div>
    );
}

export default TaskList;