import { StyleSheet, Dimensions } from 'react-native'
// const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    height: '15%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor:  '#ff0000',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 10
  },
  textInput: {
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor:  '#ffffff',
  },
  category: {
    backgroundColor:  '#ff3838',
    height: '7%',

  },
  categoryText: {
    textAlign: 'center',
    color: '#ffffff',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  newsList: {
    backgroundColor:  '#ffffff',
    width: '100%',
    height: '78%',
  },
  newsList:{
    borderWidth: 1,
    marginTop: 2,
    margin: 2,
    borderColor: '#b3b3b3'
  },
  newstitle:{
    margin: 5,
    marginLeft: 10,
  },
  newsPreview:{
    color: '#adadad',
    margin: 5,
    marginLeft: 10,
  }

});

export default styles
