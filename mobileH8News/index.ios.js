import React, { Component } from 'react';
import NewsScene from './src/NewsScene'
import PeopleScene from './src/PeopleScene'
import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';

export default class MobileH8News extends Component {

  constructor() {
    super();
    this.renderScene = this.renderScene.bind(this);
  }

  toPeopleScene(navigator) {
    navigator.push({
      index: 1
    })
  }

  toNewsScene(navigator){
    navigator.pop()
  }

  renderScene(route, navigator){
    if (route.index === 0)
      return <NewsScene navigator={navigator} toPeopleScene={() => this.toPeopleScene(navigator)} />
    else if (route.index === 1)
      return <PeopleScene navigator={navigator} toNewsScene={() => this.toNewsScene(navigator)} />
  }


  render() {
    return (
      <Navigator
      initialRoute={{ index: 0 }}
      renderScene={this.renderScene}
      />
    )
  }
}

AppRegistry.registerComponent('mobileH8News', () => MobileH8News);
