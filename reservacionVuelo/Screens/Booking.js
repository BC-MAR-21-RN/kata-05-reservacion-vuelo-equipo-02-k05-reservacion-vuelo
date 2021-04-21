import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {BookingQuestion} from '../components/BookingQuestion';
import {ReactNativeCalendar} from '../components/Calendar';
import {NumberWheel} from '../components/PassengerNumber';
import {StepManager} from '../components/StepManager';
import {styles} from '../components/BookingStyles';

export class Booking extends Component {
  constructor(props) {
    super(props);
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
          <StepManager.Step>
            <Text style={styles.label}>Your request was received.</Text>
          </StepManager.Step>
        </StepManager>
      </View>
    );
  }
}
