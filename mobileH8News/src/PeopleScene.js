import React from 'react';
import styles from '../ios/styles/index.styles.ios.js'

import {
  Alert,
  Text,
  ScrollView,
  TextInput,
  Button,
  Navigator,
  View
} from 'react-native';

export default class PeopleScene extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      people: [
        {id: 1, name: 'Raditya Arya'},
        {id: 2, name: 'Alexander H'},
        {id: 3, name: 'Yoni Setiawan'},
        {id: 4, name: 'Muhammad Iqbal'},
        {id: 5, name: 'Timothy Siahaan'},
        {id: 6, name: 'Fadly Kayo'},
        {id: 7, name: 'Irsan Sebastion'},
        {id: 8, name: 'Ida Bagus Dhegana'},
        {id: 9, name: 'Yoma Sofwan'},
        {id: 10, name: 'Syanmil Izhharuddin'},
      ]
    }
  }

  search(e){
    this.setState({
      search: e.nativeEvent.text
    })
  }

  render() {
    return (
      <View style={styles.container}>

        {/* <Header /> */}
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Home
          </Text>
          <TextInput style={styles.textInput} placeholder="search people here .. " onChange={this.search.bind(this)} value={this.state.search}/>
        </View>

      <ScrollView>
        { this.state.people
            .filter( result => (result.name === null ? '' : result.name)
            .match( new RegExp(this.state.search,'i')))
            .map( (people, index) => <View key={index} style={styles.newsList} >
              <Text style={styles.newstitle}>
                {people.name}
              </Text>
            </View>
          )
        }
      </ScrollView>

      <Button
        onPress={this.props.toNewsScene}
        title="Back Page"
        color="#841584"
        backgroundColor="#6b6b6b"
      />

      </View>
    )
  }
}
