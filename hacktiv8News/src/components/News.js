import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button
} from 'react-native'

const News = (props) => {
  return (
    <View style={styles.news}>
      <View style={{backgroundColor: '#daffb3'}}>
        <Button
          title={props.sceneTitle}
          onPress={() => props.navigator.push({
            name: 'Peoples',
            title: 'To News'
          })}
        />
      </View>
      <Text style={styles.title}>News</Text>
      <ScrollView style={styles.scroll}>
        {props.news.map((item, index) => {
           return (
             item.title !== null
             ?
             <Text style={styles.list} key={index}>
               {item.title}
             </Text>
             : false
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
  news: {
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

export default News
