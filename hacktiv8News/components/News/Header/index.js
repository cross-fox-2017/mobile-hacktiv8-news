import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Hacktiv8 News</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  title: {
    color: 'royalblue',
    fontSize: 32
  }
})

export default Header
