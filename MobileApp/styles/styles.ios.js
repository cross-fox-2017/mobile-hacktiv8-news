import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
    backgroundColor: '#1E8BC3',
    height: deviceHeight * 0.2,
    flexDirection: 'column',
    width: deviceWidth,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filter: {
    fontSize: 20,
  },
  list: {
    fontSize: 20,
  }
});
