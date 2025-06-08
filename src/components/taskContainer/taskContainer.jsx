import { useState } from "react";
import TaskStats from "../task-Stats/taskStats";
import TaskManager from "../task-manager/taskManager";
import "./taskContainer.css";
import { FaListUl } from 'react-icons/fa';
import { FaRegMoon } from "react-icons/fa";
function TaskContainer() {
    let [tasks, setTask] = useState([]);
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
                    <FaRegMoon className="mode-icon" />
                </header>
                <div className="task-dashboard">
                    <TaskStats tasks={tasks} />
                    <TaskManager tasks={tasks} setTask={setTask} />
                </div>
            </div>
        </>
    )
}

export default TaskContainer;