/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import { News, People } from './src/App.js'

export default class Hacktiv8News extends Component {

  goToNews(navigator){
    navigator.push({
      title: 'News'
    })
  }

  goToPeople(navigator){
    navigator.push({
      title: 'People'
    })
  }

  render() {
    return (

      <Navigator
        initialRoute={{ title: 'News', index: 0 }}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case 'News': return <News navigator={navigator} goToNews={()=> this.goToNews(navigator)}/>
            case 'People': return <People navigator={navigator} goToPeople={()=> this.goToPeople(navigator)}/>
            default: return <News />
          }
        }}
      />

    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Hacktiv8News', () => Hacktiv8News);
