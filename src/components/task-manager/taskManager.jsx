import "./taskManager.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { MdDragHandle } from 'react-icons/md';
import { LuListTodo } from "react-icons/lu"
function TaskManager({ tasks, setTask }) {

    let [filter, setFilter] = useState('all');
    const addTask = function (event) {
        event.preventDefault();
        const form = event.target;
        const newTask = form.taskInput.value;
        setTask([...tasks, { "text": newTask, "completed": false }]);
        toast.success('Task added successfully!');
        form.reset();
    }

    const filteredTasks = function (filter) {
        if (filter == 'all') {
            return tasks;
        } else if (filter == 'pending') {
            return tasks.filter((tasks) => !tasks.completed);
        } else if (filter == 'completed') {
            return tasks.filter((tasks) => tasks.completed);
        } else {
            return []
        }
    }

    const deleteTaskHandler = function (id) {
        let updatedTask = tasks.filter((task, index) => index != id);
        setTask(updatedTask);
        console.log("updatedtask:", updatedTask);
        toast.error('Task deleted successfully!');
    }
    const completedTask = function (id) {
        const updatedTasks = tasks.map((task, index) =>
            index == id ? { ...task, completed: !task.completed } : task
        );
        setTask(updatedTasks);
    }
    return (
        <div className="task-container">
            <div>
                <h2>Add New Task</h2>
                <form className="input-section" onSubmit={addTask}>
                    <input
                        type="text"
                        name="taskInput"
                        placeholder="Add a new task..."
                    />
                    <button>+</button>
                </form>
            </div>
            <br />
            <div className="filters">
                {["all", "pending", "completed"].map((f) => (
                    <button
                        key={f}
                        className={filter === f ? "active" : ""}
                        onClick={() => setFilter(f)}
                    >
                        {f.charAt(0).toUpperCase() + f.slice(1)}{" "}
                    </button>
                ))}
            </div>
            <br />
            <div id="taskList">
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    closeOnClick
                    pauseOnHover
                    draggable
                />
                {filteredTasks(filter).length == 0 ? (
                    <div className="empty-state-container">
                        <div className="empty-state-content">
                            <div className="empty-state-icon-wrapper">
                                <LuListTodo className="empty-state-icon" />
                            </div>
                            <p className="empty-state-tittle"> No tasks found</p>
                            <p className="empty-state-subtittle">Add a task above to get started</p>
                        </div>

                    </div>
                ) : (<ul>
                    {filteredTasks(filter).map((task, id) =>
                        <li key={id} className="task-item">
                            <span className="drag-handle">
                                <MdDragHandle />
                            </span>
                            <input type="checkbox" className="task-checkbox" checked={task.completed} onChange={() => completedTask(id)} />
                            <span className={`task-text ${task.completed ? "completed" : ""}`}>{task.text}</span>
                            <span className="delete-icon-wrapper">
                                <FiTrash className="delete-icon" onClick={() => deleteTaskHandler(id)} />
                            </span>
                        </li>)}
                </ul>)}
            </div>

        </div>
    )
}

export default TaskManager;