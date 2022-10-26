import React from 'react'
import { Stack } from '@mui/system';
import {TextField, Select, MenuItem, Typography, FormControl, InputLabel} from "@mui/material";
import { newFriendFormStackStyle } from "./style";
export const NewFriendForm = () =>{
  

  
  return (
    <Stack 
      direction="column" 
      spacing={2} 
      sx={newFriendFormStackStyle}
    >
      <Typography variant='h5'>Add New Friend</Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Name"></TextField>
        <TextField label="Email"></TextField>
      </Stack>
      <FormControl variant='filled'>
        <InputLabel>Favourite food</InputLabel>
        <Select
          label="Age"
        >
          {/*<MenuItem value={10}>Ten</MenuItem>
          */}
        </Select>
      </FormControl>
      <TextField label="Comment"></TextField>
    </Stack>
  )
}

