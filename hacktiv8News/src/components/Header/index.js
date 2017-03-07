import React, { Component } from 'react'
const dismissKeyboard = require('dismissKeyboard')

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Header extends Component {
  constructor () {
    super()
    this.state = {
      news: [],
      searchKey: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      searchKey: event.nativeEvent.text
    })
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.welcome}>
          Hacktiv8 News
        </Text>
        <View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={this.state.searchKey}
            onChange={this.handleChange}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    backgroundColor: 'steelblue',
    width: deviceWidth,
    paddingTop: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  searchInput: {
    height: 37,
    width: '90%',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 4
  }
})

export default Header
