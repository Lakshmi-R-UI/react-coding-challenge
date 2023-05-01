import React from "react";
import Task from './Task';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';



const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
  
    const handleTaskChange = (event) => {
      setNewTask(event.target.value);
    };
  
    const handleAddTask = () => {
      if (newTask) {
        setTasks([...tasks, newTask]);
        setNewTask('');
      }
    };
  
    const handleTaskDelete = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    return (
      <>
         <Stack direction="row" spacing={2}  justifyContent="center">
         <TextField type="text"  value={newTask} onChange={handleTaskChange} size="normal"/>
         <Button  variant="contained" onClick={handleAddTask}  startIcon={<AddIcon />}>Add New Task</Button>
         </Stack>
        <ul>
          {tasks.length > 0 ? tasks.map((task, index) => (
            <li key={index}>
              <Task description={task} id={index} onDelete={handleTaskDelete} />
            </li>
          )): <div>No Task</div>}
        </ul>
      </>
    );
  }
  
  export default TodoList;