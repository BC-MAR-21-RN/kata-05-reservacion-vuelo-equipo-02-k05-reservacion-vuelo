import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BookingQuestion} from '../components/BookingQuestion';
import {ReactNativeCalendar} from '../components/Calendar';
import {NumberWheel} from '../components/PassengerNumber';
import {InfoBooking} from '../components/InfoBooking';
import {StepManager} from '../components/StepManager';

export class Booking extends Component {
  constructor(props) {
    super(props);
  }

  nextButton() {
    return (
      <View style={styles.button}>
        <TouchableOpacity
          accessibilityLabel="Submit login information"
          style={styles.filledButton}>
          <Text style={styles.filledButtonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    );
  }

  card() {
    <View style={styles.progressCard}>
      <Text>progresscard</Text>
    </View>;
  }

  render() {
    return (
      <View style={styles.container}>
        <StepManager>
          <StepManager.Step>
            <Text style={styles.label}>Where are you now?</Text>
            <BookingQuestion style={styles.component} />
          </StepManager.Step>
          <StepManager.Step>
            <Text style={styles.label}>Where will you be flying to?</Text>
            <BookingQuestion style={styles.component} />
          </StepManager.Step>
          <StepManager.Step>
            <Text style={styles.label}>Select date</Text>
            <ReactNativeCalendar />
          </StepManager.Step>
          <StepManager.Step>
            <Text style={styles.label}>How many passengers?</Text>
            <NumberWheel />
          </StepManager.Step>
        </StepManager>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
  },
  returnButton: {
    paddingRight: 10,
  },
  return: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
  label: {
    fontWeight: '700',
    fontSize: 45,
  },
});
