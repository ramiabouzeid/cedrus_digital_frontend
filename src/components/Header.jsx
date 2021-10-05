import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
const Header = (props) => {
    console.log(props.auth_tokens);
    const logout = function(){
        console.log('asd');
    }
    let buttons;
    if((props.auth_tokens && props.auth_tokens === 'null') || !props.auth_tokens){
        buttons = <div><Button color="inherit" href="/login">Login</Button><Button color="inherit" href="/register">Register</Button></div>
    }else{
        buttons = <div><Button color="inherit" href="/createMovie">Create Movie</Button><Button color="inherit" onClick={props.logout}>Logout</Button></div>
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>MovieMania</Typography>
          {buttons}
          {/* <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/register">Register</Button>
          <Button color="inherit" href="/createMovie">Create Movie</Button>
          <Button color="inherit" onClick={logout}>Logout</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;