import {Header} from './Header'
import {PeopleForm} from './PeopleForm'
import {PeopleList} from './PeopleList'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';


class App extends Component {
  constructor(){
    super()
    this.state = {
      people: [
      {
        id:1,
        name:'Dan Abramov'
      },
      {
        id:2,
        name:'Simon'
      },
      {
        id:3,
        name:'Bill'
      },
      {
        id:4,
        name:'Jack'
      }
    ],
    searchPeople:''
    }
  }

  handleChange(event){
    this.setState({
      searchPeople: event.nativeEvent.text
    })
  }
  render(){
    return(
      <View style={styles.container}>
      <Header />
      <PeopleForm handleChange= {this.handleChange.bind(this)}/>
      <PeopleList peoples={this.state.people.filter((x)=>{return (x.name===null ? '':x.name).match(new RegExp(this.state.searchPeople,'i'))})}/>
      <Button
      onPress={() => {
        this.props.navigator.pop()
      }}
      title="go to News" color="green"/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App
