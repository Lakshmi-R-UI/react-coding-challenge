import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


const Task = (props) => {
    const [subtasks, setSubtasks] = useState([]);
    const [newSubtask, setNewSubtask] = useState('');
  
    const handleSubtaskChange = (event) => {
      setNewSubtask(event.target.value);
    };
  
    const handleAddSubtask = () => {
      if (newSubtask) {
        setSubtasks([...subtasks, newSubtask]);
        setNewSubtask('');
      }
    };
  
    const handleDelete = () => {
      props.onDelete(props.id);
    };
  
    const handleSubtaskDelete = (index) => {
      const updatedSubtasks = subtasks.filter((_, i) => i !== index);
      setSubtasks(updatedSubtasks);
    };
  
    return (
      <div className="list-container">
        <span>{props.description}</span>
        <IconButton aria-label="delete" size="small" onClick={handleDelete}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
        <ul>
          {subtasks.map((subtask, index) => (
            <li key={index}>
              {subtask}
                <IconButton aria-label="delete" size="small" onClick={() => handleSubtaskDelete(index)}>
                <DeleteIcon fontSize="inherit" />
                </IconButton>
            </li>
          ))}
           <Stack direction="row" spacing={2} >
         <TextField type="text"  value={newSubtask} onChange={handleSubtaskChange} size="small"/>
         <Button  variant="contained" onClick={handleAddSubtask}  startIcon={<AddIcon />} size="small">Add New Subtask</Button>
         </Stack>
        </ul>
      </div>
    );
  }

  export default Task