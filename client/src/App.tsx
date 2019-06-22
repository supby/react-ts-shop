import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar/NavBar'
import { Container } from 'semantic-ui-react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container className="content-container">
        { this.props.children }  
        </Container>
      </div>
    );
  }
}