import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 30,
    flex: 1,
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: '700',
    color: '#5974F5',
  },
  textStyle: {
    color: '#868686',
  },
  bottomTextStyle: {
    textAlign: 'center',
    color: '#A3ACB9',
    fontSize: 15,
    paddingVertical: 10,
  },
  textInputTitle: {
    fontSize: 15,
    paddingBottom: 5,
  },
  textInputStyle: {
    borderWidth: 1,
    borderBottomColor: 'black',
    width: 350,
    height: 50,
  },
  textInputSpacing: {
    paddingVertical: 5,
  },
  checkBoxAlignment: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 5,
  },
  buttonStyle: {
    backgroundColor: '#5974F5',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    paddingTop: 15,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  hyperlinkText: {
    color: '#5974F5',
    textDecorationLine: 'underline',
  },
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
    paddingTop: 5,
  },
});
export default styles;
