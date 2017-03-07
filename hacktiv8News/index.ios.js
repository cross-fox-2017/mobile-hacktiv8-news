import React, { Component } from 'react';
// import logo from './src/logo.svg'
// import './src/App.css'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/App'

export default class hacktiv8News extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});

AppRegistry.registerComponent('hacktiv8News', () => hacktiv8News);
