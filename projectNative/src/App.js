import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Header,NewsForm,NewsList} from './components'

class App extends Component {
  constructor(){
    super()
    this.state = {
      link: [
      {
        title: 'React',
        url:'https://facebook.github.io/react/',
        author:'jordan wilke',
        num_comments:3,
        points:4,
        objectID:0
      },
      {
        title: 'Redux',
        url:'https://github.com/reactjs/redux',
        author:'Dan Abramov,Andrew Clark',
        num_comments:2,
        points:5,
        objectID:1
      }
    ],
    searchLink:''
    }
  }

  handleChange(event){
    this.setState({
      searchLink: event.nativeEvent.text
    })
    fetch(`http://hn.algolia.com/api/v1/search?query=${event.nativeEvent.text}`)
    .then(response => response.json()).then(data=>
      this.setState({
        link: data.hits
      })
    )
  }
  render(){
    return(
      <View style={styles.container}>
      <Header />
      <NewsForm handleChange= {this.handleChange.bind(this)}/>
      <NewsList links={this.state.link.filter((x)=>{return (x.title===null ? '':x.title).match(new RegExp(this.state.searchLink,'i'))})}/>
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
