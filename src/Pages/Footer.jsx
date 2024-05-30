import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';

const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#2196f3',
        zIndex: (theme) => theme.zIndex.drawer + 1,
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

export default Footer;
