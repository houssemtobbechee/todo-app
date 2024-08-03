import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // State for the task being edited

  const addTask = (task) => {
    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...task, id: editingTask.id } : t));
      setEditingTask(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]); // Add new task with unique ID
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  const toggleComplete = (task) => {
    setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div>
      <TaskForm addTask={addTask} editingTask={editingTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} onToggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
