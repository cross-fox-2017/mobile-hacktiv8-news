import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Header from './Header'
import Contents from './Contents'
import Footer from './Footer'

export default class News extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Button onPress={this.props.back} title="back" />
        <Button onPress={this.props.goToNews} title="news" />
        <Contents />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
