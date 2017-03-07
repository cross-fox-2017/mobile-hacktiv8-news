import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Search from './Search'

class Contents extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 3,
    alignItems: 'center',
  },
});

export default Contents
