import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'

const Peoples = (props) => {
  return (
    <View style={styles.peoples}>
      <Text style={styles.title}>Peoples</Text>
      <ScrollView>
        {props.peoples.map((people, index) => {
           return (
             <Text style={styles.list} key={index}>
               {people.name}
             </Text>
           )
         })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  peoples: {
    flex: 0.8,
    backgroundColor: 'skyblue'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20
  },
  list: {
    marginLeft: 20,
    marginRight: 20,
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center'
  }
})

export default Peoples
