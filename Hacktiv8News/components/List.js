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
  return (<Text>Loading...</Text>)
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

});