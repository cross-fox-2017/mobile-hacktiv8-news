import React, { Component } from 'react';
import NewsScene from './components/News'
import PeopleScene from './components/People'

import {
  AppRegistry,
  Navigator,
} from 'react-native';

export default class Hacktiv8News extends Component {
  renderNewScene (route, navigator) {
    if (route.index === 0) {
      return (
        <NewsScene route={route} navigator={navigator} />
      )  
    } 
    else if (route.index === 1) {
      return (
        <PeopleScene route={route} navigator={navigator} />
      )
    }
  }
  render() {
    const appThis = this
    return (
      <Navigator
        initialRoute={{ title: 'News Scene', index: 0 }}
        renderScene={appThis.renderNewScene}
      />
    )
  }
}

AppRegistry.registerComponent('Hacktiv8News', () => Hacktiv8News);
