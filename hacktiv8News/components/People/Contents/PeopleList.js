import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

const PeopleList = props => {
  return (
    <ScrollView>
      { props.peopleList
          .map((item, index) => <Text key={index} style={styles.peopleList}>{item.name}</Text>)
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  peopleList: {
    marginTop:5,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    height: 40,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 40
  }
})

export default PeopleList
