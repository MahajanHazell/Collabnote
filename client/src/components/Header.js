import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" sx={{ mb: 4 }}>
    <Toolbar sx={{ flexDirection: 'column', alignItems: 'center', py: 2 }}>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
        CollabNote
      </Typography>
      <Typography variant="subtitle1" component="div">
        Collaborative Notes with AI Power
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
