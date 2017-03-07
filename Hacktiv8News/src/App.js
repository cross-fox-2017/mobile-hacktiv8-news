import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

import Header from './components/Header.js';
import Content from './components/content.js';
import Form from './components/Form.js'


export class News extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      news: [
        { id: 1, title: 'Buku React Native', url: 'http://www.google.com' },
        { id: 2, title: 'Macbook Pro', url: 'http://www.google.com' },
        { id: 3, title: 'Asus Zenfone', url: 'http://www.google.com' },
        { id: 4, title: 'Pisang Goreng', url: 'http://www.google.com' },
        { id: 5, title: 'Botol', url: 'http://www.google.com' },
        { id: 6, title: 'Dompet', url: 'http://www.google.com' },
        { id: 7, title: 'Kentang goreng', url: 'http://www.google.com' }
      ],
      currentTitle: ''
    };
  }

  handleChange(e){
    console.log(e.nativeEvent.text);
    this.setState({
      currentTitle: e.nativeEvent.text
    });
  }


  render() {
    return (
      <View>
        <Header />
        <Button onPress={this.props.goToNews} title="News" />
        <Button onPress={this.props.goToPeople} title="People" />
        <Form onChange={this.handleChange.bind(this)}/>
        <Content datas={this.state.news.filter(item => new RegExp(this.state.currentTitle, 'i').test(item.title))} />
      </View>
    );
  }
}

export class People extends React.Component {

  constructor(){
    super();
    this.state = {
      peoples: [
        { id: 1, name: 'Luke Skywalker' },
        { id: 2, name: 'good' },
        { id: 3, name: 'nice' },
        { id: 4, name: 'wow' },
        { id: 5, name: 'cool' }
      ]
    };
  }

  render() {
    return (
      <View>
        <Header />
        {
          this.state.peoples.map( (data) => {
            console.log(data);
            return (
              <Text key={data.id} style={styles.contentText}>{data.name}</Text>
            )

          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4CAF50'
  }
});
