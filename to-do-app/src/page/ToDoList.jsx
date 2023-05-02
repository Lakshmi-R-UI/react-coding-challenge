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
      if (Object.keys(newTask).length>0) {
        setTasks([...tasks, { description: newTask, isDone: false }]);
        setNewTask('');
      }
    };
  
    const handleTaskDelete = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };

    
  const handleTaskDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTasks(updatedTasks);
  };
  
    return (
      <>
         <Stack direction="row" spacing={2}  justifyContent="center">
         <TextField type="text"  value={newTask} onChange={handleTaskChange} size="small"/>
         <Button  variant="contained" onClick={handleAddTask}  startIcon={<AddIcon />} size="small">Add New Task</Button>
         </Stack>
        <ul>
          {tasks.length > 0 ? tasks.map((task, index) => (
            <li key={index}>
              <Task description={task.description} id={index} onDelete={handleTaskDelete} isDone={task.isDone}
              onDone={handleTaskDone}/>
            </li>
          )): <div>No Task</div>}
        </ul>
      </>
    );
  }
  
  export default TodoList;