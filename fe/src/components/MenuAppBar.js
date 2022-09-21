import * as React from 'react';
import Cookies from 'js-cookie';

import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Menu,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@mui/material/';

import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle, ExpandLess, ExpandMore } from '@mui/icons-material/';

import { useNavigate } from 'react-router-dom';

export default function MenuAppBar() {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openNested, setOpenNested] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const clickRightMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const clickFeatures = () => {
    setOpenNested(!openNested);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickLeftMenu = (event) => {
    setOpenNested(false);
    setAnchorEl2(event.currentTarget);
  };

  /* routePaths are defined in App.js */
  const redirectRoute = (routePath) => {
    navigate(routePath);
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove('user');
    window.location.reload();
  };

  let user;
  if (Cookies.get('user')) {
    user = JSON.parse(Cookies.get('user'));
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={clickLeftMenu}
          >
            <MenuIcon />
          </IconButton>

          {/* Left hand side */}

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)}
            onClose={() => {
              setAnchorEl2(null);
              setOpenNested(true);
            }}
          >
            <List component="nav" aria-labelledby="nested-list-subheader">
              <ListItem button onClick={() => redirectRoute('/MainPage')}>
                <ListItemText primary="Main Page" />
              </ListItem>
              <ListItem button onClick={clickFeatures}>
                <ListItemText primary="Features" />
                {openNested ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openNested} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button onClick={() => redirectRoute('/Feature1')}>
                    <ListItemText primary="Feature1" />
                  </ListItem>
                  <ListItem button onClick={() => redirectRoute('/Feature2')}>
                    <ListItemText primary="Feature2" />
                  </ListItem>
                  <ListItem button onClick={() => redirectRoute('/Feature3')}>
                    <ListItemText primary="Feature3" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button onClick={() => redirectRoute('/About')}>
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mentorship Task project
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: -1 }}>
            {user ? user.name : ''}
          </Typography>

          {/* Right hand side */}

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={clickRightMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <ListItem button onClick={() => redirectRoute('/profile')}>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={() => redirectRoute('/login')}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button onClick={() => handleLogout()}>
              <ListItemText primary="Logout" />
            </ListItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
