// App.js or equivalent
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm'; // Import TaskForm or your edit component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskForm />} /> {/* Route for new task */}
        <Route path="/tasks/edit/:id" element={<TaskForm />} /> {/* Route for edit task */}
        <Route path="/tasks/:id" element={<TaskDetail />} /> {/* Route for task details */}
      </Routes>
    </Router>
  );
}

export default App;
