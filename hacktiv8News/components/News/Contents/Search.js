import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';

import NewsList from './NewsList'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      currentSearch: '',
      newsList: [
        {
          title: 'React',
          url: 'https://facebook.github.io/react/',
          author: 'Jordan Walke',
          num_comments: 3,
          points: 4,
          objectID: 0,
        },
        {
          title: 'Redux',
          url: 'https://github.com/reactjs/redux',
          author: 'Dan Abramov, Andrew Clark',
          num_comments: 2,
          points: 5,
          objectID: 1,
        }
      ]
    }
  }
  render() {
    return (
      <View>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="Type here to search for news"
            onChangeText={
              text => {
                this.setState({currentSearch: text})
              }
            }
          />
        </View>
        <NewsList newsList={this.state.newsList} currentSearch={this.state.currentSearch} />
      </View>
    )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  search: {
    padding: 10,
    width: width,
  },
  input: {
    height: 50,
    borderColor: 'royalblue',
    borderWidth: 1,
    padding: 10,
    margin: 15
  }
});

export default Search
