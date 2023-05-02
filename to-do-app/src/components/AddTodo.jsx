import React from 'react';
import { useState } from 'react';
import { addTask } from '../redux/actions';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add'
import { useDispatch } from 'react-redux';


const AddTodo = () => {
const [newTask, setNewTask] = useState('')
const dispatch = useDispatch()
  
  const handleTaskChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleAddTask = ()=> {
    if(newTask!==''){
    dispatch(addTask(newTask))
    setNewTask('')
    }
  }

  return (
    <Stack direction="row" spacing={2}  justifyContent="center">
        <TextField value={newTask} onChange={handleTaskChange} size="small" id="add-task"/>
        <Button  variant="contained" onClick={handleAddTask}  startIcon={<AddIcon />} size="small" id="add-task-btn">Add New Task</Button>
    </Stack>
  );
};


export default AddTodo;
