import React, { Component } from 'react';
import {List} from './List'
import {Search} from './Search'
import { Button } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Navigator,
  View
} from 'react-native';

export default class PeopleScene extends Component {
  constructor (props) {
    super(props)
    this.state = {
      datas: [
      {title: 'Abraham Lincoln'},
      {title: 'Jhon F. Kennedy'},
      {title: 'Jon Stewart'},
      {title: 'Alfred Hepburn'},
      {title: 'Barrack Obama'},
      {title: 'David Beckham'},
      {title: 'Albert Einstein'},
      ],
      searchKeyword: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({
      searchKeyword: e.nativeEvent.text
    });
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.welcome}>
            People List
          </Text>
          <Image
            style={styles.newspaper}
            source={{uri: 'https://image.flaticon.com/icons/png/512/46/46799.png'}}
          />
          <Text style={styles.instructions}>
            Search
          </Text>
          <View style={styles.searchForm}>
            <Search style={styles.searchInput} handleChange={this.handleChange}/>
          </View>
        </View>

        <Button small warning full onPress={() => {
            this.props.navigator.pop()
          }}>
          <Text>Go to Hacktiv8 News</Text>
        </Button>

        <View >
          <List datas={this.state.datas.filter(data => {
              return data.title.toLowerCase().indexOf(this.state.searchKeyword.toLowerCase()) !== -1
            })
          } />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#FFC107',
    flexDirection: 'column',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
  },
  searchForm:{
    width:'50%',
  },
  newspaper: {
    width: 40,
    height: 40
  },
  welcome: {
    fontWeight:'bold',
    color:'white',
    fontFamily: 'Cochin',
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    color:'white',
    marginBottom: 5,
    fontFamily: 'Cochin',
  },
  buttonNavigator: {
    color: 'red',
    fontSize: 15,
    marginBottom: 5,
    fontFamily: 'Cochin',
  },
});
