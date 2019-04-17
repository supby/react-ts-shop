import React, { Component } from 'react';
import './App.css';
import Item from './components/Item'
import NavBar from './components/NavBar'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Item description="Item 1"/>
      </div>
    );
  }
}