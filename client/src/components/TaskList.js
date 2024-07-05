import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Task List</h1>
            <Link to="/tasks/new">Add New Task</Link>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <Link to={`/tasks/${task._id}`}>{task.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
