import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const TaskDetail = () => {
  const [task, setTask] = useState(null);
  const { id } = useParams(); // Fetches the id parameter from the URL
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`https://task-management-app-beryl-one.vercel.app//tasks/${id}`);
        setTask(response.data); // Sets the fetched task data to state
      } catch (error) {
        console.error('There was an error fetching the task!', error);
      }
    };

    fetchTask(); // Executes fetchTask() when the component mounts or when id changes
  }, [id]); // Depend on id to refetch task details when id changes

  if (!task) {
    return <div>Loading...</div>; // Display loading state until task data is fetched
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`https://task-management-app-beryl-one.vercel.app//tasks/${task._id}`); // Deletes task
      navigate('/'); // Navigates back to the task list after deletion
    } catch (error) {
      console.error('There was an error deleting the task!', error);
    }
  };

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <Link to={`/tasks/edit/${task._id}`}>Edit Task</Link> {/* Link to edit task */}
      <button onClick={handleDelete}>Delete Task</button> {/* Button to delete task */}
    </div>
  );
};

export default TaskDetail;
