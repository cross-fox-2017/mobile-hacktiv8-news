import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../styles/styles'

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text>
        Welcome to Syanmil React Native News!
      </Text>
    </View>
  )
}
