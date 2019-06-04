import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        { this.props.children }
      </div>
    );
  }
}