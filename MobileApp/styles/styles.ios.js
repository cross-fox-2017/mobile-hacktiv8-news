import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    backgroundColor: '#BAD455',
    height: deviceHeight * 0.1,
    alignItems : 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  filter: {
    backgroundColor: '#BAD455',
    paddingBottom: 15,
  },
  list: {
    height: deviceHeight * 0.5,
    backgroundColor: '#52B3D9',
    paddingTop: 20,
  },
  textInput: {
    backgroundColor: '#C5EFF7',
    height: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  textList: {
    fontSize: 12,
    textAlign: 'center',
  },
  people: {
    height: deviceHeight * 0.7,
    backgroundColor: 'yellow',
    marginTop: 25,
    alignItems: 'center',
    padding: 30,
  },
  peopleText: {
    fontSize: 18,
  }
});
