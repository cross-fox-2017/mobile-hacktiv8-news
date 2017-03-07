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


export default class NewsScene extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      news: [
        { id: 1, title: 'Harga Beras Hari Ini', prev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore' },
        { id: 2, title: 'Persiapan Cagub Jelang Putaran kedua', prev: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 3, title: 'Profil CEO KumpulBerbagi', prev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore' },
        { id: 4, title: 'Hacktiv8 Membuka Cabang di USA', prev: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
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
          <TextInput style={styles.textInput} placeholder="search news here .. " onChange={this.search.bind(this)} value={this.state.search}/>
        </View>

        {/* <ScrollView horizontal={true} className="category" style={styles.category}>
          <Text style={styles.categoryText}>
            Top News
          </Text>
          <Text style={styles.categoryText}>
            People
          </Text>
        </ScrollView> */}

      <ScrollView>
        { this.state.news
            .filter( result => (result.title === null ? '' : result.title)
            .match( new RegExp(this.state.search,'i')))
            .map( (news, index) => <View key={index} style={styles.newsList} >
              <Text style={styles.newstitle}>
                {news.title.toUpperCase()}
              </Text>
              <Text style={styles.newsPreview}>
                {news.prev.slice(0,50)}
              </Text>
            </View>
          )
        }
      </ScrollView>

      <Button
        onPress={this.props.toPeopleScene}
        title="Next Page"
        color="#841584"
        backgroundColor="#6b6b6b"
      />
      </View>
    )
  }
}
