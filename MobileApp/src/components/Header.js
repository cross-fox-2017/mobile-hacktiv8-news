import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../styles/styles'

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Syanmil News and People!
      </Text>
    </View>
  )
}
