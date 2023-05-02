import React, { useState } from 'react';
import { toggleTask, addSubtask, toggleSubtask } from '../redux/actions';
import { useDispatch } from 'react-redux';
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add'

const Todo = ({ todo }) => {
  const dispatch = useDispatch()
  const [newSubtask, setNewSubtask] = useState('');

  const handleSubtaskChange = (event) => {
    setNewSubtask(event.target.value);
  };

  const handleToggle = () => {
    dispatch(toggleTask(todo.id));
  };

  const handleAddSubtask = () => {
    if (newSubtask !== ''){
    dispatch(addSubtask(todo.id, newSubtask))
    setNewSubtask('')
    }
  };

  const handleToggleSubtask = (id) => {
    dispatch(toggleSubtask(todo.id, id))
  }

  return (
    <li>
      <div className="list-container">
      <Checkbox
              checked={todo.done}
              onChange={handleToggle}
              id={todo.title}
            />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.title}</span>
      <ul>
        {todo.subtasks.map(subtask => (
           <li key={subtask.id}>
            <Checkbox
              checked={subtask.done}
              onChange={()=>handleToggleSubtask(subtask.id)}
            />
           <span style={{ textDecoration: todo.done || subtask.done ? 'line-through' : 'none' }}>{subtask.title}</span>
               </li>
        ))}
      </ul>
        <Stack direction="row" spacing={2} >
         <TextField type="text"  value={newSubtask} onChange={handleSubtaskChange} size="small" id={`add-sub-task-${todo.title}`}/>
         <Button  variant="contained" onClick={handleAddSubtask}  startIcon={<AddIcon />} size="small" id={`add-sub-task-btn-${todo.title}`}>Add New Subtask</Button>
         </Stack>
       
      </div>
    </li>
  );
};

export default Todo;
