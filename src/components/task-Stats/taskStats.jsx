import { FaListUl } from 'react-icons/fa';
import { BsCircle, BsCheckCircle } from 'react-icons/bs'
import './taskStats.css';
function TaskStats({ tasks }) {
    const total = tasks.length;
    const pending = tasks.filter((task) => !task.completed).length;
    const complete = tasks.filter((task) => task.completed).length;
    return (
        <div className='task-stats-container'>
            <div className="task-box">
                <FaListUl className="task-icon total" />
                <div>
                    <div className="label">Total Tasks</div>
                    <div className="count">{total}</div>
                </div>
            </div>
            <div className='task-box'>
                <BsCircle className='task-icon pending' />
                <div>
                    <div className="lable">Pending</div>
                    <div className='count'>{pending}</div>
                </div>
            </div>
            <div className='task-box'>
                <BsCheckCircle className='task-icon complete' />
                <div>
                    <div className='lable'>Complete
                    </div>
                    <div className='count'>{complete}</div>
                </div>
            </div>
        </div>
    )
}
export default TaskStats;