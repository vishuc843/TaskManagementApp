import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const { id } = useParams(); // Fetches the id parameter from the URL
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // If id is provided, fetch existing task data to populate the form for editing
      axios.get(`https://task-management-app-beryl-one.vercel.app//tasks/${id}`)
        .then(response => {
          const { title, description, dueDate } = response.data;
          setTitle(title);
          setDescription(description);
          setDueDate(new Date(dueDate).toISOString().substr(0, 10)); // Format date for input type date
        })
        .catch(error => console.error('Error fetching task:', error));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // If id exists, perform update (PUT request)
        await axios.put(`https://task-management-app-beryl-one.vercel.app//tasks/${id}`, {
          title,
          description,
          dueDate,
        });
      } else {
        // If no id (creating new task), perform create (POST request)
        await axios.post('https://task-management-app-beryl-one.vercel.app//tasks', {
          title,
          description,
          dueDate,
        });
      }

      // Redirect to the landing page after successful submission
      navigate('/');
    } catch (error) {
      console.error('Error submitting task:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Task' : 'Create New Task'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
