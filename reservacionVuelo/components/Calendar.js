import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {styles} from '../components/BookingStyles';

export class ReactNativeCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  render() {
    return (
      <View style={styles.componentContainer}>
        <View style={styles.question}>
          <Text style={styles.label}>{this.props.question}</Text>
        </View>
        <View style={styles.calendar}>
          <Calendar
            current={'2021-04-13'}
            onDayPress={day => {
              this.setState({selected: day.dateString});
            }}
            markedDates={{
              [this.state.selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: '#5c6df8',
                selectedTextColor: '#ffff',
              },
            }}
            theme={{
              calendarBackground: '#fafafa',
            }}
          />
        </View>
      </View>
    );
  }
}
