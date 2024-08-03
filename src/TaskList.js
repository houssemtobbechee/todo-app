import React from 'react';
import styled from 'styled-components';
import TaskCard from './components/TaskCard';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => (
  <List>
    {tasks.map((task, index) => (
      <TaskCard 
        key={index} 
        task={task} 
        onEdit={onEdit} 
        onDelete={onDelete} 
        onToggleComplete={onToggleComplete} 
      />
    ))}
  </List>
);

export default TaskList;
