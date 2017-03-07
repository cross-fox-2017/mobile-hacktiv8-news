import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';

const showList = (news) => {
  return (<View>
    {
      news.datas.map((data, index) => {
        return(
          <Text style={styles.newslist} key={index}>
            {data.title}
          </Text>
        )
      })
    }
  </View>
)
}

const emptyList = () => {
  return (          <Image 
            style={styles.newspaper} 
            source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/0c/44/da/0c44dacf1b038014a6f941131c5e8aa2.gif'}}
          />)
}

export const List = (props) => {
  console.log(props.datas.length);
  return (
    props.datas.length > 0 ? showList(props) : emptyList()

  )
}






const styles = StyleSheet.create({
  newslist:{
    textAlign: 'center',
    fontSize:8,
    marginTop: 10,
  },
    newspaper: {
    width: 40, 
    height: 40
  },

});