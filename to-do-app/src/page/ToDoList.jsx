import React, { useEffect } from "react";
import Task from './Task';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';


const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTasks, setFilteredTask] = useState([])

  
    const handleTaskChange = (event) => {
      setNewTask(event.target.value);
    };
  
    const handleAddTask = () => {
      if (Object.keys(newTask).length>0) {
        setTasks([...tasks, { description: newTask, isDone: false, id:Math.random() }]);
        setNewTask('');
      }
    };
  
    const handleTaskDelete = (taskId) => {
      const updatedTasks = tasks.filter((task, i) => task.id !== taskId);
      setTasks(updatedTasks);
    };

    
  const handleTaskDone = (taskId) => {
    const updatedTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone: !task.isDone };
        } else {
          return task;
        }
      });
    setTasks(updatedTasks);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(()=>{
    let newTaskList = tasks
    if(searchTerm !== '')
     newTaskList = tasks.filter((task) =>
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTask(newTaskList)
  },[tasks, searchTerm])

 
  
    return (
      <>
      <Stack direction="column" spacing={2} >
         <Stack direction="row" spacing={2}  justifyContent="center">
         <TextField value={newTask} onChange={handleTaskChange} size="small"/>
         <Button  variant="contained" onClick={handleAddTask}  startIcon={<AddIcon />} size="small">Add New Task</Button>
         </Stack>
         <Stack direction="row" justifyContent="center">
         <TextField
          type="search"
          placeholder="Search tasks"
          value={searchTerm}
          onChange={handleSearchTermChange}
          size="small"
        />
        </Stack>
        </Stack>
        <ul>
          {filteredTasks.length > 0 ? filteredTasks.map((task, index) => (
            <li key={task.id}>
              <Task description={task.description} id={task.id} onDelete={handleTaskDelete} isDone={task.isDone}
              onDone={handleTaskDone}/>
            </li>
          )): <div>No Task</div>}
        </ul>
      </>
    );
  }
  
  export default TodoList;