import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 20px;
  color: #333;
`;

const Description = styled.p`
  margin: 0 0 10px;
  color: #555;
`;

const Info = styled.p`
  margin: 0 0 10px;
  color: #777;
`;

const Button = styled.button`
  background: ${props => props.primary ? '#28a745' : '#dc3545'};
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${props => props.primary ? '#218838' : '#c82333'};
  }

  &:active {
    background: ${props => props.primary ? '#1e7e34' : '#bd2130'};
  }
`;

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => (
  <Card>
    <Title>{task.title}</Title>
    <Description>{task.description}</Description>
    <Info>Due: {task.dueDate}</Info>
    <Button primary onClick={() => onEdit(task)}>Edit</Button>
    <Button onClick={() => onDelete(task)}>Delete</Button>
    <Button onClick={() => onToggleComplete(task)}>
      Mark as {task.completed ? 'Incomplete' : 'Complete'}
    </Button>
  </Card>
);

export default TaskCard;
