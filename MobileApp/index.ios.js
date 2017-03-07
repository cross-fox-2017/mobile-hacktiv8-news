/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { App } from './src/App'
import { styles } from './styles/styles'

export default class MobileApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('MobileApp', () => MobileApp);
