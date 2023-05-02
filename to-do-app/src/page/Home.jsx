import React, { useEffect, useState } from 'react';
import {useSelector } from 'react-redux';
import TodoList from './ToDoList';
import AddTodo from '../components/AddTodo';
import SearchBar from '../components/SearchBar';
import Stack from '@mui/material/Stack'

const Home = () => {
  const [filteredTodos, setFilteredTodos] = useState([])
  const tasks = useSelector((state) => state.tasks);
  const searchItem = useSelector((state) => state.searchQuery)

  useEffect(()=>{
    let filteredTodoList = tasks
    if (searchItem !== '')
    filteredTodoList = tasks.filter(todo => todo.title.includes(searchItem));
    setFilteredTodos(filteredTodoList)
  },[tasks, searchItem])

  return (
    <div>
      <Stack direction="column" spacing={2}>
      <AddTodo />
      <SearchBar />
      </Stack>
      <TodoList todos={filteredTodos} />
    </div>
  );
};


export default Home;
