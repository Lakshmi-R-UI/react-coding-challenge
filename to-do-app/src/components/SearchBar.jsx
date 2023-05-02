import React from 'react';
import {setSearchQuery} from '../redux/actions'
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
const [searchString, setSearchString] = useState('')
const dispatch = useDispatch()
  
  const handleSearch = (event) => {
    setSearchString(event.target.value)
    dispatch(setSearchQuery(event.target.value))
  }


  return (
    <Stack direction="row" spacing={2}  justifyContent="center">
        <TextField type="search" placeholder="Enter Search Text" value={searchString} onChange={handleSearch} size="small" id="search-bar"/>
    </Stack>
  );
};


export default SearchBar;
