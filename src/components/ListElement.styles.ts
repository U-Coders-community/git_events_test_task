import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 10,
    borderRadius: 22,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 30,
    width: 30,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
