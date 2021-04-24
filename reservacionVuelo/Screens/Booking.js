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
        <StepManager
          initialValues={{
            departureCountry: '',
            departureCity: '',
            arrivalCountry: '',
            arrivalCity: '',
            date: '',
            day: '',
            month: '',
            year: '',
            passengers: '',
          }}>
          <StepManager.Step>
            {({onChangeValue, values}) => (
              <View>
                <BookingQuestion
                  onChangeValue={onChangeValue}
                  country="departureCountry"
                  city="departureCity"
                  question="Where are you now?"
                />
              </View>
            )}
          </StepManager.Step>
          <StepManager.Step>
            {({onChangeValue, values}) => (
              <View>
                <BookingQuestion
                  onChangeValue={onChangeValue}
                  country="arrivalCountry"
                  city="arrivalCity"
                  question="Where are you flying to?"
                />
              </View>
            )}
          </StepManager.Step>
          <StepManager.Step>
            {({onChangeValue, values}) => (
              <View>
                <ReactNativeCalendar
                  onChangeValue={onChangeValue}
                  name="date"
                  day="day"
                  month="month"
                  year="year"
                />
              </View>
            )}
          </StepManager.Step>
          <StepManager.Step>
            {({onChangeValue, values}) => (
              <View>
                <NumberWheel onChangeValue={onChangeValue} name="passengers" />
              </View>
            )}
          </StepManager.Step>
          <StepManager.Step>
            {() => (
              <View style={styles.componentContainer}>
                <Text style={styles.label}>Your request was received.</Text>
              </View>
            )}
          </StepManager.Step>
        </StepManager>
      </View>
    );
  }
}
