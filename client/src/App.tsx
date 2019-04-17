import React, { Component } from 'react';
import './App.css';
import ItemsList from './components/ItemsList'
import NavBar from './components/NavBar'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemsList />
      </div>
    );
  }
}