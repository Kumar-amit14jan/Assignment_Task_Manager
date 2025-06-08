import { useState } from "react";
import TaskStats from "../task-Stats/taskStats";
import TaskManager from "../task-manager/taskManager";
import "./taskContainer.css";
import { FaListUl } from 'react-icons/fa';
import { FaRegMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5"
import { useLocalStorage } from "../../hooks/useLocalStorage";
function TaskContainer({ darkMode, setDarkMode }) {
    const [tasks, setTasks] = useLocalStorage("tasks", [])
    return (
        <>
            <div className="main">
                <header className="heading-section">
                    <div className="heading">
                        <FaListUl className="taskManager-icon" />
                        <div className="heading-text">
                            <h1>Task Manager</h1>
                            <p>Stay organized and productive</p>
                        </div>
                    </div>
                    <button onClick={() => setDarkMode(!darkMode)} className="mode-icon">
                        {darkMode ? <IoSunny /> : <FaRegMoon />}
                    </button>
                </header>
                <div className="task-dashboard">
                    <TaskStats tasks={tasks} />
                    <TaskManager tasks={tasks} setTask={setTasks} />
                </div>
            </div>
        </>
    )
}

export default TaskContainer;