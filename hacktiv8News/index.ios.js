import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import News from './components/News'
import People from './components/People'

export default class hacktiv8News extends Component {

  goToPeople(navigator) {
    navigator.push({
      name: 'people',
      title: 'Hacktiv8 People',
    });
  }

  goToNews(navigator) {
    navigator.push({
      name: 'news',
      title: 'Hacktiv8 News',
    });
  }

  back(navigator) {
    navigator.pop()
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'news', title: 'Hacktiv8 News', index: 0 }}
        renderScene={(route, navigator) => {
          switch(route.name) {
            case 'news': return <News navigator={navigator} back={() => this.back(navigator)} goToPeople={() => this.goToPeople(navigator)}/>
            case 'people': return <People navigator={navigator} back={() => this.back(navigator)} goToNews={() => this.goToNews(navigator)} />
            default: return <News />
          }
        }}
      />
    )
  }
}

AppRegistry.registerComponent('hacktiv8News', () => hacktiv8News);
