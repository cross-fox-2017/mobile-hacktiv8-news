import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class Content extends Component {
  render() {
    return (
      <View style={styles.contents}>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contents: {
    flex: 0.8,
    backgroundColor: 'skyblue',

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})

export default Content
