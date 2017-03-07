import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';

export const List = (props) => {
  return (<View>
    {
      props.datas.map((data, index) => {
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

const styles = StyleSheet.create({
  newslist:{
    textAlign: 'center',
    fontSize:8,
    marginTop: 10,
  },

});