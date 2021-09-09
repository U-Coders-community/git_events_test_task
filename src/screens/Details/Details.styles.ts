import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  imageContainer: {
    height: 70,
    width: 70,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  field: {
    backgroundColor: 'grey',
    height: 50,
    borderRadius: 22,
    padding: 10,
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    width: '100%',
    overflow: 'hidden',
  },
  container: {
    justifyContent: 'space-evenly',
    padding: 20,
    alignItems: 'center',
  },
});
