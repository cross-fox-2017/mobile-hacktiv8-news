import React from 'react'
import { Text, View, ListView } from 'react-native'
import { styles } from '../../styles/styles'

export const List = (props) => {
  return (
    <View style={styles.list}>
      {props.data.map((item, index) => {
        return <Text style={styles.textList} key={index}>{item.title}</Text>
        })
      }
    </View>
  )
}
