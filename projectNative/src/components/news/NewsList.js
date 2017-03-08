import React from 'react'
import{
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  Text
} from 'react-native'

import {NewsItem} from './NewsItem'

export const NewsList = (props) => (
  <ScrollView>
  {
    props.links.map((item,index) => <NewsItem key={index} {...item}/>)
  }
  </ScrollView>

)

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  header: {
    height: deviceHeight *0.1,
    width: deviceWidth,

    backgroundColor: '#F5F5F5',
  }
})
