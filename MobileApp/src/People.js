import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../styles/styles'

export class People extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      people : [
        {name: 'Luke'},
        {name: 'Sky'},
        {name: 'Walker'},
      ]
    }
  }
  fetchPeople(){
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(items => {
        this.setState({
          people : items.results
        })
      })
      .catch((err)=> console.log(err))
  }
  componentWillMount(){
    this.fetchPeople()
  }
  render(){
    return (
      <View style={styles.people}>
        <Text style={{fontSize: 32}}>People</Text>
        {this.state.people.map((item, index)=>{
          return (
              <Text style={styles.peopleText} key={index}>
                {item.name}
              </Text>
            )
          })
        }
        <Button title="Go To News" onPress={this.props.goToNews} color="green"/>
      </View>
    )
  }
}
