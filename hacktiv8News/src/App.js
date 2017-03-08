import React, { Component } from 'react'

import {
  View,
  StyleSheet,
  Navigator
} from 'react-native'

import { Header, News, Peoples } from './components'

class App extends Component {
  constructor () {
    super()
    this.state = {
      news: [],
      peoples: [],
      searchKey: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      searchKey: event.nativeEvent.text
    })
    this.fetchNews(event.nativeEvent.text)
    this.fetchPeoples(event.nativeEvent.text)
  }

  componentDidMount () {
    this.fetchNews('')
    this.fetchPeoples()
  }

  fetchNews (searchQuery) {
    fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURI(searchQuery)}`)
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        this.setState({
          news: resp.hits
        })
      })
  }

  fetchPeoples () {
    fetch('https://swapi.co/api/people/')
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        this.setState({
          peoples: resp.results
        })
      })
  }

  // goToNews(navigator){
  //   navigator.pop()
  // }
  //
  // goToPeoples(navigator){
  //   navigator.push({
  //     name: 'Peoples'
  //   })
  // }

  render() {
    return (
      <View>
        <Header searchKey={this.state.searchKey} handleChange={this.handleChange}/>
        <Navigator
          initialRoute={{ name: 'News', title: 'To People' }}
          renderScene={(route, navigator) => {
            switch (route.name) {
              case 'News':
              return (
                <News
                  news={this.state.news.filter((eachNews) => (eachNews.title === null ? '' : eachNews.title).match(new RegExp(this.state.searchKey, 'i')))}
                  sceneTitle={route.title}
                  navigator={navigator}
                />
              )
              case 'Peoples': return (
                <Peoples
                  peoples={this.state.peoples.filter((eachPeople) => (eachPeople.name === null ? '' : eachPeople.name).match(new RegExp(this.state.searchKey, 'i')))}
                  sceneTitle={route.title}
                  navigator={navigator}
                />
              )
              default: return (
                <News
                  news={this.state.news.filter((eachNews) => (eachNews.title === null ? '' : eachNews.title).match(new RegExp(this.state.searchKey, 'i')))}
                  sceneTitle={route.title}
                  navigator={navigator}
                />
              )
            }
          }}
        />
      </View>
    )
  }
}

export default App
