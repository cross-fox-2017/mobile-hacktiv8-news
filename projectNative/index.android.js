import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import News from './src/components/news'
import Peoples from './src/components/peoples'



export default class projectNative extends Component {
  renderNewScene (route, navigator) {

    if (route.name === 'news') {

      return (
        <News route={route} navigator={navigator} />
      )

    } else if (route.name === 'people') {
      return (
        <Peoples route={route} navigator={navigator} />)
    }

  }
  render() {
    const that = this
    return (

      <Navigator
        initialRoute ={{name:'news'}}
        renderScene={that.renderNewScene}
       />

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('projectNative', () => projectNative);
