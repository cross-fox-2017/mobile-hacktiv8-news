import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button
} from 'react-native'

const Peoples = (props) => {
  return (
    <View style={styles.peoples}>
      <View style={{backgroundColor: '#daffb3'}}>
        <Button
          title={props.sceneTitle}
          onPress={() => props.navigator.pop()}
        />
      </View>
      <Text style={styles.title}>Peoples</Text>
      <ScrollView style={styles.scroll}>
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
  scroll:{
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ccffee',
    borderRadius: 5
  },
  peoples: {
    flex: 0.8,
    backgroundColor: 'skyblue'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  list: {
    padding: 3,
    marginLeft: 20,
    marginRight: 20,
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center'
  }
})

export default Peoples
