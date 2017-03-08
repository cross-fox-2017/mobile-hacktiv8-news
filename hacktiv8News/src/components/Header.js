import React, { Component } from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet
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
          value={props.searchKey}
          onChange={props.handleChange}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 0.17,
    backgroundColor: 'steelblue',
    paddingTop: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
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
