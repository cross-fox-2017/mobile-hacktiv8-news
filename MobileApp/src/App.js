import React from 'react'
import { News } from './News'
import { People } from './People'
import { styles } from '../styles/styles'
import { Navigator, View, Text } from 'react-native'

export class App extends React.Component {
  constructor(){
    super()
    this.sceneRender = this.sceneRender.bind(this)
  }
  sceneRender(route, navigator){
    switch (route.scene) {
      case 'news':
      console.log(this);
        return (<News
          scene={route.scene}
          goToPeople={() => this.goToPeople(navigator)}/>)
      case 'people':
        return (<People
          scene={route.scene}
          goToNews={() => this.goToNews(navigator)}/>)
      default:
        return <News />
    }
  }
  goToPeople(navigator){
    navigator.push({
      scene: 'people'
    })
  }
  goToNews(navigator){
    navigator.push({
      scene: 'news'
    })
  }
  render(){
    return (
      <View style={{height: '100%', width: '100%'}}>
        <Navigator
          initialRoute= {{scene: 'news'}}
          renderScene= {this.sceneRender}
          />
      </View>

    )
  }
}
