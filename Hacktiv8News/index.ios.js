/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {List} from './components/List'
import {Search} from './components/Search'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';

export default class Hacktiv8News extends Component {
  constructor () {
    super()
    this.state = {
      datas: [
          {
              title: 'How Indonesia Responds to the Looming US Fed Funds Rate Hike',
          }, {
              title: 'Royal Bank of Scotland NV Ends Business Activities in Indonesia',
          }, {
              title: 'Accel leads $10 million round in agri-tech startup',
          }, {
              title: 'Samsung Galaxy S8 market launch delayed by a week',
          }, {
              title: 'Trai proposes Net at 2p per MB by easing access to Wi-Fi',
          }
      ],
      searchKeyword: '',
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange (e) {
    console.log(e.nativeEvent.text);
    console.log(this.state.searchKeyword);
    this.setState({
      searchKeyword: e.nativeEvent.text
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.welcome}>
            Hacktiv8 News!
          </Text>
          <Image 
            style={styles.newspaper} 
            source={{uri: 'https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Newspaper_news_rss_vector_paper_symbol_simple.png'}}
          />
          <Text style={styles.instructions}>
            Search
          </Text>
          <View style={styles.searchForm}>
            <Search style={styles.searchInput} handleChange={this.handleChange}/>
          </View>

        </View>

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
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#FFD57A',
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
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Hacktiv8News', () => Hacktiv8News);
