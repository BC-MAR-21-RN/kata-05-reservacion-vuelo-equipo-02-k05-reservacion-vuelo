import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'space-evenly',
    paddingLeft: 30,
    paddingRight: 30,
  },
  welcomeText: {
    fontWeight: '700',
    fontSize: 40,
  },
  label: {
    color: '#b6b7ba',
    paddingTop: 20,
    paddingBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#b6b7ba',
    paddingLeft: 10,
    borderRadius: 6,
  },
  filledButton: {
    borderRadius: 10,
    backgroundColor: '#5c6df8',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    marginTop: 40,
  },
  filledButtonText: {
    color: '#ffff',
  },
  emptyButton: {
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
  },
  emptyButtonText: {
    color: '#b6b7ba',
  },
  loginGoogle: {
    height: 50,
    width: '100%',
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#5c6df8',
    borderRadius: 6,
  },
  iconSpace: {
    paddingRight: 7,
  },
  buttonWithIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
