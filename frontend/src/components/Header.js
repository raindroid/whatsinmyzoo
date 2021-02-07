import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {TopicPublisher} from './eventBroker/eventHandler'

const activeStype = {
    fontWeight: "bold",
    color: "red"
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      align: "center",
      alignItems: 'center'
    },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
    }));
  
export const Header = () => {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [drawerState, setDrawerState] = React.useState(false)
    const open = Boolean(anchorEl);
    const history = useHistory();
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const redirectPath = page => {
        history.push(page)
    }

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const logout = () => {
      setAnchorEl(null);
      redirectPath('/')
    };

    const myzoo = () =>{
      setAnchorEl(null);
      redirectPath('/zoo')
    }

    const list = () => (
        <div
          className={classes.list}
          role="presentation"
          onClick={()=>setDrawerState(false)}
          onKeyDown={()=>setDrawerState(false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            
            {auth && (
              <div>
                <IconButton
                  edge="start" 
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
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
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={myzoo}>My Zoo</MenuItem>
                  <MenuItem onClick={logout}>Log out</MenuItem>
                </Menu>
              </div>
            )}

            <Typography variant="h6" className={classes.title} onClick={()=>redirectPath('/')}>
              What's in my ZOO ?!
            </Typography>

            <IconButton className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>setDrawerState(!drawerState)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer anchor='right' open={drawerState} onClose={()=>setDrawerState(false)}>
            {list()}
        </Drawer>
      </div>
    );
  }

