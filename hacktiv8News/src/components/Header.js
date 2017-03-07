import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    backgroundColor: 'steelblue',
    width: deviceWidth,
    paddingTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})

export default Header
