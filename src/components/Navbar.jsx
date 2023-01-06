import { Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import PaletteIcon from '@mui/icons-material/Palette';
import { Button } from '@mui/material';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AppBar   color='default' >
        <Toolbar variant='regular' >
        <PaletteIcon/>  
        {user?.displayName ? <Button onClick={handleSignOut}>Logout</Button>
       :  <Link to='/signin' style={{color:"black"}}>Sign in</Link> }
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;