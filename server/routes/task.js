const express = require('express');
const Task = require('../models/Task'); // Import the Task model

const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Get a single task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
});

// Create a new task
router.post('/', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create task' });
  }
});

// Update an existing task
// Example backend route for updating a task
router.put('/:id', async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id, // Ensure req.params.id matches the format of MongoDB _id
        req.body,     // Ensure req.body contains the updated task data
        { new: true }  // Optionally return the updated task instead of the original
      );
      if (updatedTask) {
        res.json(updatedTask);
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (err) {
      res.status(400).json({ error: 'Failed to update task' });
    }
  });
  

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (deletedTask) {
      res.json({ message: 'Task deleted' });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
