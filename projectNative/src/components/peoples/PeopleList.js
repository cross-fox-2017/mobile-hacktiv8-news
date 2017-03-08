import React from 'react'
import{
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  Text
} from 'react-native'

import {PeopleItem} from './PeopleItem'

export const PeopleList = (props) => (
  <ScrollView>
  {
    props.peoples.map((item,index) => <PeopleItem key={index} {...item}/>)
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
