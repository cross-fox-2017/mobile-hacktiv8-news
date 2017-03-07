import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'

const News = (props) => {
  return (
    <View style={styles.news}>
      <Text style={styles.title}>News</Text>
      <ScrollView>
        {props.news.map((item, index) => {
           return (
             <Text style={styles.list} key={index}>
               {item.title}
             </Text>
           )
         })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  news: {
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

export default News
