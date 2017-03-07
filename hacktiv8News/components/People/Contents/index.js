import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import PeopleList from './PeopleList'

class Contents extends Component {
  constructor(){
    super()
    this.state = {
      people: [
        {
          id: 1,
          name: 'Luke Skywalker'
        },
        {
          id: 2,
          name: 'Obi-Wan Kenobi'
        },
        {
          id: 3,
          name: 'Qui-Gon Jinn'
        },
        {
          id: 4,
          name: 'Darth Maul'
        }
      ]
    }
  }
  render() {
    return (
      <View style={styles.content}>
        <PeopleList peopleList={this.state.people} />
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
