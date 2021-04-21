import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  //  StepManager styles
  stepContainer: {
    flex: 1,
  },
  returnButton: {
    paddingRight: 10,
  },
  return: {
    flex: 1,
  },
  progressCard: {
    flex: 2,
  },
  component: {
    flex: 8,
  },
  button: {
    flex: 2,
    flexDirection: 'column',
  },
  filledButton: {
    borderRadius: 10,
    backgroundColor: '#5c6df8',
    alignItems: 'center',
    padding: 15,
  },
  filledButtonText: {
    color: '#ffff',
    fontWeight: '700',
  },
  questionText: {
    flex: 10,
    justifyContent: 'flex-start',
  },
  card: {
    flex: 2,
  },

  //Booking styles

  container: {
    height: Dimensions.get('window').height,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
  },
  label: {
    fontWeight: '700',
    fontSize: 45,
  },

  //calendar styles

  componentContainer: {
    height: '100%',
  },
  calendar: {
    flex: 4,
  },

  //passengers styles

  itemSize: {
    height: '100%',
  },
  question: {
    justifyContent: 'center',
  },
  wheelContainer: {
    padding: 40,
  },

  //question texboxes
  questionTextBox: {
    flex: 2,
    paddingTop: 10,
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#b6b7ba',
    paddingLeft: 6,
    borderRadius: 6,
  },
});
