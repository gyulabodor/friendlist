import './App.css';
import { useEffect } from "react"
import { NewFriendForm } from './components/NewFriendForm/NewFriendForm';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { FriendList } from './components/FriendList/FriendList';
function App() {

  useEffect( () =>{
    document.title = "Friendlist"
  });

  return (
    <div className="App">
      <Stack direction="column" spacing={2}>
        <Typography variant='h3'>Friendlist</Typography>
         <FriendList/>
      </Stack>
    </div>
  );
}

export default App;
