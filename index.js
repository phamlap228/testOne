import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './Components/App.js';
export default class testOne extends Component {
  render() {
    return(
      <App />
    );
  }
}
AppRegistry.registerComponent('testOne', () => App);
