import React, { Component } from 'react'

import {
  View,
  Text
} from 'react-native'

import { Header, Content } from './components'

class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Content />
      </View>
    )
  }
}

export default App
