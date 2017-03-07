import React from 'react'
import { View, TextInput } from 'react-native'
import { styles } from '../../styles/styles'

export const Filter = (props) => {
  return (
    <View style={styles.filter}>
      <TextInput
        placeholder=" Search Your News Here..."
        style={styles.textInput}
        onChangeText={e => props.handleChange(e) }/>
    </View>
  )
}
