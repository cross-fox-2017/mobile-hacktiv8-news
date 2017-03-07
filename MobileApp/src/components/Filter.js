import React from 'react'
import { View, TextInput } from 'react-native'
import { styles } from '../../styles/styles'

export const Filter = () => {
  return (
    <View style={styles.filter}>
      <TextInput placeholder="Search" style={styles.textInput}/>
    </View>
  )
}
