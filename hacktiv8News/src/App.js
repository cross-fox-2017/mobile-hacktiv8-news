import React, { Component } from 'react'

import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'

import { Header, Content } from './components'

class App extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View>
          <Header />
          <Content />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default App
