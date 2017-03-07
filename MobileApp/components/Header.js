import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../styles/styles'

export const Header = () => {
  return (
    <View>
      <Text style={styles.header}>
        Welcome to Syanmil React Native!
      </Text>
    </View>
  )
}
