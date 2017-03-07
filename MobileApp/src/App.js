import React from 'react'
import { Header, Filter, List } from './components'
import { View } from 'react-native'
import { styles } from '../styles/styles'

export class App extends React.Component {
  constructor(){
    super()
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
      ]
    }
  }
  render(){
    return (
      <View>
        <Header />
        <Filter />
        <List data={this.state.data}/>
      </View>
    )
  }
}
