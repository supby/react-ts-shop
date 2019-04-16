import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Item from './components/item'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton className="menuButton" color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Items shop
            </Typography>
            <div className="grow" />
            <div className="search">
              <div className="search-icon">
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: "input-root",
                  input: "input-input",
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Item description="Item 1"/>
      </div>
    );
  }
}