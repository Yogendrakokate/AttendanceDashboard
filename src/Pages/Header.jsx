import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';

const Header = () => {
  return (
    <BottomNavigation
      sx={{
       marginBottom:'1rem',
        left: 0,
        right: 0,
        backgroundColor: '#2196f3',

      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to="/"
        sx={{ color: '#fff' }}
      />
      <BottomNavigationAction
        label="Events"
        icon={<EventIcon />}
        component={Link}
        to="/attendance"
        sx={{ color: '#fff' }}
      />
    </BottomNavigation>
  );
};

export default Header;
