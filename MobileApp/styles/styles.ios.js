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
    height: deviceHeight * 0.2,
    alignItems : 'center',
    justifyContent: 'center',
  },
  filter: {
  },
  list: {
    height: deviceHeight * 0.6,
    backgroundColor: '#52B3D9',
  },
  textInput: {
    backgroundColor: '#C5EFF7',
    height: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  textList: {
    fontSize: 12,
    textAlign: 'center',
  }
});
