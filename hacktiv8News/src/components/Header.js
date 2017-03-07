import React, { Component } from 'react'
const dismissKeyboard = require('dismissKeyboard')

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.welcome}>
        Hacktiv8 News And Peoples
      </Text>
      <View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          searchKey={props.searchKey}
          handleChange={props.handleChange}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    backgroundColor: 'steelblue',
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
