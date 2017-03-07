import React from 'react'
import { Header, Filter, List } from './components'
import { View, Button } from 'react-native'
import { styles } from '../styles/styles'

export class News extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          title: 'React',
          url: 'https://facebook.github.io/react/',
          author: 'Jordan Walke',
          objectID: 0
        },
        {
          title: 'Redux',
          url: 'https://github.com/reactjs/redux',
          author: 'Dan Abramov, Andrew Clark',
          objectID: 1
        }
      ],
      search: '',
    }
  }
  handleChange(text){
    this.setState({
      search: text
    })
    this.letFetch()
  }
  cekSearch(item){
    let cut = new RegExp(`${this.state.search}`, 'i')
    return cut.test(item)
  }
  letFetch(){
    let uri = encodeURI(this.state.search)
    fetch(`https://hn.algolia.com/api/v1/search?query=${uri}`)
      .then(function(response) {
        return response.json()
      })
      .then(data =>{
        this.setState({
          data : data.hits
        })
      })
      .catch(function(err){
        throw err
      })
  }
  render(){
    return (
      <View>
        <Header />
        <Filter handleChange={this.handleChange.bind(this)}/>
        <List data={this.state.data}/>
        <Button title="Go To People" onPress={this.props.goToPeople} color="green"/>
      </View>
    )
  }
}
