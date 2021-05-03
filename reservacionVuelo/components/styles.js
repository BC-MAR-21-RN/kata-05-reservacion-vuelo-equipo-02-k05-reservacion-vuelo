import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: '#fafafa',
  },
  myFlightsContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
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
  /* Flight Card Styles */
  locationDets: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#A3ACB9',
  },
  flightDets: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  cityText: {
    fontSize: 30,
    fontWeight: '700',
  },
  countryText: {
    fontSize: 15,
    color: '#A3ACB9',
  },
  planeIcon: {
    color: '#5974F5',
    top: 10,
  },
  bottonFlightDetsText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  /*My Flight Styles */
  roundedButton: {
    height: 70,
    width: 70,
    backgroundColor: '#5974F5',
    borderRadius: 50,
    alignSelf: 'center',
  },
  roundedButtonIcon: {
    color: 'white',
    alignSelf: 'center',
    top: '25%',
    position: 'absolute',
  },
  absoluteIcon: {
    position: 'absolute',
    left: '50%',
  },
  relativeIcon: {
    position: 'relative',
    left: '-50%',
  },
});
export default styles;
