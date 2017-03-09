import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'

const datanews = [
  {name: 'detik.com'},
  {name: 'bola.net'},
  {name: 'kompas.com'},
  {name: 'kumpulberbagi.com'},
  {name: 'Bola.com'},
]

export default class News extends Component {
    constructor(){
      super()
      this.state = {
        news: datanews,
        keyword: '',
      }
    }
    onHandleChange(event){
      this.setState({
        keyword: event.nativeEvent.text
      })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    News Page
                </Text>
                <Button onPress={() => this.props.navigator.push({page: 'people'})}
                  title="People"
                />
              <View>
                  <TextInput style={styles.inputSearch} onChange={this.onHandleChange.bind(this)}></TextInput>
              </View>
              <Text style={styles.daftarMedia}>
                Daftar Media
              </Text>
              {this.state.news.filter((dataFilter)=>{
                  return dataFilter.name.toLowerCase().match(this.state.keyword.toLowerCase())
              }).map((showDataNews, index)=>{
                return (
                  <Text key={index}>
                      {showDataNews.name}
                  </Text>
                )
                })
              }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: '100%',
        width:'100%'
    },
    inputSearch: {
      marginBottom: 20,
      height: 40,
      width: 150,
      borderColor: 'orange',
      borderWidth: 1
    },
    daftarMedia: {
      marginBottom: 10,
    }
});
