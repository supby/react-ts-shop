import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import NavBar from './components/NavBar'
import { actionCreators as itemsActionCreators } from './store/items/actions'

interface AppProps {
  requestItems: any;
}
class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <NavBar onSearch={this.props.requestItems} />
        { this.props.children }
      </div>
    );
  }
}

export default connect(
  null,
  itemsActionCreators
)(App)