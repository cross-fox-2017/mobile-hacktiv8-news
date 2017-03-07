import React, { Component } from 'react';
import App from './src/App'
import {
  AppRegistry,
  View
} from 'react-native';

export default class MobileH8News extends Component {

  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('mobileH8News', () => MobileH8News);
