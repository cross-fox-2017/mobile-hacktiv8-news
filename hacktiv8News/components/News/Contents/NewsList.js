import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';


const NewsList = props => {
  console.log(props);
  return (
    <ScrollView>
      { props.newsList
          .filter(item => new RegExp(props.currentSearch, 'i').test(item.title))
          .map((item, index) => <Text key={index} style={styles.newsList}>{item.title}</Text>)
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  newsList: {
    marginTop:5,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    height: 40,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 40
  }
})

export default NewsList
